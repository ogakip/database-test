import { appDataSource } from "../data-source";
import { Sections } from "../entities/section.entity";
import { AppError } from "../errors/appError";

export async function CreateSectionService(data: any) {
    const sectionRepo = appDataSource.getRepository(Sections)

    await sectionRepo.save({
        title: data.title,
        path: data.path
    });

    return { message: "Seção criada com sucesso" };
}

export async function ReadSectionService(data: any) {
    const sectionRepo = appDataSource.getRepository(Sections)

    const getAllSections = await sectionRepo.find();

    if (getAllSections) {
        return getAllSections
    } else {
        return [];
    }
}

export async function UpdateSectionService(id: number, data: any) {
    const sectionRepo = appDataSource.getRepository(Sections)

    const sectionExists = await sectionRepo.findOneBy({ id });

    if (!sectionExists) {
        throw new AppError("Seção não encontrada");
    }

    await sectionRepo.update(sectionExists.id, { ...data });

    return { message: "Seção atualizada com sucesso" };
}

export async function DeleteSectionService(id: number) {
    const sectionRepo = appDataSource.getRepository(Sections)

    const sectionExists = await sectionRepo.findOneBy({ id });

    if (!sectionExists) {
        throw new AppError("Seção não encontrada");
    }

    await sectionRepo.remove(sectionExists);

    return { message: "Seção deletada com sucesso" };
}