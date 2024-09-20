import express from "express";
import "express-async-errors";
import cors from "cors";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError";
import { UserRouter } from "./routes/users";
import { SectionRouter } from "./routes/sections";
import { RowitemRouter } from "./routes/rowitems";

export const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', UserRouter)
app.use('/rowitem', RowitemRouter)
app.use('/sections', SectionRouter)
app.use(handleAppErrorMiddleware);
