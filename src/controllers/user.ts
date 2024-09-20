import { Request, Response } from "express";
import { DeleteUserService, LoginService, RegisterService, UpdateUserService } from "../services/user";

export async function LoginController(req: Request, res: Response) {
  const service = await LoginService(req.body);

  return res.status(200).json(service);
}

export async function RegisterController(req: Request, res: Response) {
  const service = await RegisterService(req.body);

  return res.status(201).json(service);
}

export async function UpdateUserController(req: Request, res: Response) {
  const { username } = res.locals

  const service = await UpdateUserService(username, req.body);

  return res.status(200).json(service);
}

export async function DeleteUserController(req: Request, res: Response) {
  const { username } = res.locals
  const service = await DeleteUserService(username);

  return res.status(200).json(service);
}
