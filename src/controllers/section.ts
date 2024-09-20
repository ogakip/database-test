import { Request, Response } from "express";
import { CreateSectionService, DeleteSectionService, ReadSectionService, UpdateSectionService } from "../services/section";


export async function CreateSection(req: Request, res: Response) {
    const service = await CreateSectionService(req.body);

    return res.status(201).json(service);
}

export async function ReadSections(req: Request, res: Response) {
    const service = await ReadSectionService(req.body);
    
    return res.status(201).json(service);
}

export async function UpdateSection(req: Request, res: Response) {
    const service = await UpdateSectionService(Number(req.params.id), req.body);

    return res.status(200).json(service);
}

export async function DeleteSection(req: Request, res: Response) {
    const service = await DeleteSectionService(Number(req.params.id));
    
    return res.status(200).json(service);
}