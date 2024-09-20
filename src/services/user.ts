import { appDataSource } from "../data-source";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import "reflect-metadata";
import { Users } from "../entities/users.entity";
import { AppError } from "../errors/appError";

export async function LoginService(data: LoginUserProps) {
  const userRepo = appDataSource.getRepository(Users)

  const userExists = await userRepo.findOneBy({ username: data.username });

  if (!userExists) {
      throw new AppError("Registro não encontrado");
  }

  const comparepass = await compare(data.pass, userExists.pass);

  if (!comparepass) {
      throw new AppError("User ou senha não coincidem");
  }

  const accessToken = jwt.sign({ username: userExists.username }, 'SECRET_KEY', {
      expiresIn: "24h"
  });

  return {
      accessToken
  }
}

export async function RegisterService(data: LoginUserProps) {
  const userRepo = appDataSource.getRepository(Users);

  const userAlreadyExists = await userRepo.findOneBy({ username: data.username });
  if (userAlreadyExists) {
    throw new AppError("Usuário já cadastrado");
  }

  const hashedpass = await hash(data.pass, 10);

  await userRepo.save({
    username: data.username,
    pass: hashedpass,
    isFirstLogin: true
  });

  return { message: "Registro realizado com sucesso" };
}

export async function DeleteUserService(username: string) {
  const userRepo = appDataSource.getRepository(Users);

  const userExists = await userRepo.findOneBy({ username });

  if (!userExists) {
    throw new AppError("Usuário não encontrado");
  }

  await userRepo.remove(userExists);

  return { message: "Usuário deletado com sucesso" };
}

export async function UpdateUserService(username: string, data: UpdateUSerProps) {
  const userRepo = appDataSource.getRepository(Users);

  const userExists = await userRepo.findOneBy({ username });

  if (!userExists) {
    throw new AppError("Usuário não encontrado");
  }

  if (data.pass) {
    const hashedPass = await hash(data.pass, 10);
    data.pass = hashedPass;
  }

  await userRepo.update(userExists.id, { ...data, isFirstLogin: false });

  return { message: "Senha atualizada com sucesso" };
}
