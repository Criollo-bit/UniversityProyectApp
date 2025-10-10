import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from '@prisma/client';
export declare class ProgramsController {
    private readonly programsService;
    constructor(programsService: ProgramsService);
    create(createProgramDto: CreateProgramDto): Promise<Program>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        specializations: {
            name: string;
        }[];
        semesters: {
            number: number;
            name: string;
        }[];
    } & {
        name: string;
        id: number;
        duration_semesters: number;
    })[]>;
    findOne(id: number): Promise<{
        courses: {
            name: string;
            credits: number;
        }[];
        students: {
            firstName: string;
            lastName: string;
        }[];
        specializations: {
            name: string;
        }[];
        semesters: {
            number: number;
            name: string;
        }[];
    } & {
        name: string;
        id: number;
        duration_semesters: number;
    }>;
}
