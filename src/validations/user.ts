import { object, string } from "yup";

export const createUserSchema = object()
  .shape({
    username: string()
      .required("Nome é obrigatório no corpo da requisição")
      .max(158, "O comprimento deve ser inferior a 158"),
    pass: string()
      .required("Senha é obrigatória no corpo da requisição")
      .matches(/[a-z]/, "Sua senha deve conter pelo menos uma letra minúscula")
      .matches(/[A-Z]/, "Sua senha deve conter pelo menos uma letra maiúscula")
      .matches(/[0-9]/, "Sua senha deve conter pelo menos um número")
      .matches(/\W/, "Sua senha deve conter pelo menos um caractere especial")
      .matches(/^(?!.*\s).{0,}$/, "Sua senha não pode conter espaços"),
  })
  .noUnknown(true);

export const loginUserSchema = object()
  .shape({
    username: string()
      .required("Nome é obrigatório no corpo da requisição")
      .max(158, "O comprimento deve ser inferior a 158"),
    pass: string().required("Senha é obrigatória no corpo da requisição"),
  })
  .noUnknown(true);
