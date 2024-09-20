import { appDataSource } from "../data-source";
import { Rowitem } from "../entities/rowItem.entity";
import { Sections } from "../entities/section.entity";
import { AppError } from "../errors/appError";

export async function CreateRowitemService(sectionId: number, data: any) {
    const rowitemRepo = appDataSource.getRepository(Rowitem)
    const sectionRepo = appDataSource.getRepository(Sections)

    const getSection = await sectionRepo.findOneBy({ id : sectionId });

    await rowitemRepo.save({
        key: data.key,
        value: data.value,
        section: getSection
    });

    return { message: "Item criado com sucesso" };
}

export async function ReadRowitemService(data: any) {
    const rowitemRepo = appDataSource.getRepository(Rowitem)

    const getAllRows = await rowitemRepo.find();

    if (getAllRows) {
        return getAllRows
    } else {
        return [];
    }
}

export async function UpdateRowitemService(id: number, data: any) {
    const rowitemRepo = appDataSource.getRepository(Rowitem)

    const rowitemExists = await rowitemRepo.findOneBy({ id });

    if (!rowitemExists) {
        throw new AppError("Item não encontrado");
    }

    await rowitemRepo.update(rowitemExists.id, { ...data });

    return { message: "Item atualizado com sucesso" };
}

export async function DeleteRowitemService(id: number) {
    const rowitemRepo = appDataSource.getRepository(Rowitem)
    
    const rowitemExists = await rowitemRepo.findOneBy({ id });

    if (!rowitemExists) {
        throw new AppError("Item não encontrado");
    }

    await rowitemRepo.remove(rowitemExists);

    return { message: "Item deletado com sucesso" };
}