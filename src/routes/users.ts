import { Router } from "express";

import { schemaValidation } from "../middlewares/schemaValidation";

import { loginUserSchema, createUserSchema } from "../validations/user";
import { DeleteUserController, LoginController, RegisterController, UpdateUserController } from "../controllers/user";
import { verifyToken } from "../middlewares/tokenAuth";

export const UserRouter = Router();
UserRouter.post("/login", schemaValidation(loginUserSchema), LoginController);
UserRouter.post(
  "/register",
  schemaValidation(createUserSchema),
  RegisterController
);
UserRouter.delete("/delete", verifyToken, DeleteUserController)
UserRouter.patch("/update", verifyToken, UpdateUserController)