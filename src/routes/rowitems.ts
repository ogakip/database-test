import { Router } from "express";
import { verifyToken } from "../middlewares/tokenAuth";

import { CreateRowitem, ReadRowitem, UpdateRowitem, DeleteRowitem } from "../controllers/rowitem";

export const RowitemRouter = Router();
RowitemRouter.post('/create/:id', verifyToken, CreateRowitem)
RowitemRouter.get('/read', verifyToken, ReadRowitem)
RowitemRouter.patch('/update/:id', verifyToken, UpdateRowitem)
RowitemRouter.delete('/delete/:id', verifyToken, DeleteRowitem)