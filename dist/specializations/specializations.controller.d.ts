import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from '@prisma/client';
export declare class SpecializationsController {
    private readonly s;
    constructor(s: SpecializationsService);
    create(d: CreateSpecializationDto): Promise<Specialization>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
            id: number;
            duration_semesters: number;
        };
    } & {
        name: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<Specialization>;
    update(id: number, d: UpdateSpecializationDto): Promise<Specialization>;
    remove(id: number): Promise<Specialization>;
}
