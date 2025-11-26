import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from '@prisma/client';
export declare class ProgramsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(d: CreateProgramDto): Promise<Program>;
    findAll(p: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        students: {
            firstName: string;
            lastName: string;
            email: string;
            id: number;
            programId: number;
        }[];
        specializations: {
            name: string;
            id: number;
            programId: number;
        }[];
        semesters: {
            number: number;
            name: string;
            id: number;
            programId: number;
        }[];
    } & {
        name: string;
        id: number;
        duration_semesters: number;
    })[]>;
    findOne(id: number): Promise<Program>;
    update(id: number, d: UpdateProgramDto): Promise<Program>;
    remove(id: number): Promise<Program>;
}
