import { Request, Response } from "express";
import { CreateRowitemService, DeleteRowitemService, ReadRowitemService, UpdateRowitemService } from "../services/rowitem";

export async function CreateRowitem(req: Request, res: Response) {
    const service = await CreateRowitemService(Number(req.params.id), req.body);

    return res.status(201).json(service);
}

export async function ReadRowitem(req: Request, res: Response) {
    const service = await ReadRowitemService(req.body);
    
    return res.status(201).json(service);
}

export async function UpdateRowitem(req: Request, res: Response) {
    const service = await UpdateRowitemService(Number(req.params.id), req.body);

    return res.status(200).json(service);
}

export async function DeleteRowitem(req: Request, res: Response) {
    const service = await DeleteRowitemService(Number(req.params.id));
    
    return res.status(200).json(service);
}