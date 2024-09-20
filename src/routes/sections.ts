import { Router } from "express";
import { verifyToken } from "../middlewares/tokenAuth";

import { CreateSection, ReadSections, UpdateSection, DeleteSection } from "../controllers/section";

export const SectionRouter = Router();
SectionRouter.post('/create', verifyToken, CreateSection)
SectionRouter.get('/read', verifyToken, ReadSections)
SectionRouter.patch('/update/:id', verifyToken, UpdateSection)
SectionRouter.delete('/delete/:id', verifyToken, DeleteSection)