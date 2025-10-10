import { PrismaService } from '../prisma/prisma.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { Specialization } from '@prisma/client';
export declare class SpecializationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSpecializationDto: CreateSpecializationDto): Promise<Specialization>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
            duration_semesters: number;
        };
    } & {
        name: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<Specialization>;
}
