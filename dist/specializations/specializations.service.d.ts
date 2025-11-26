import { PrismaService } from '../prisma/prisma.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from '@prisma/client';
export declare class SpecializationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(d: CreateSpecializationDto): Promise<Specialization>;
    findAll(p: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
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
