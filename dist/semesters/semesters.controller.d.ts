import { SemestersService } from './semesters.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { Semester } from '@prisma/client';
export declare class SemestersController {
    private readonly s;
    constructor(s: SemestersService);
    create(d: CreateSemesterDto): Promise<Semester>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
            id: number;
            duration_semesters: number;
        };
        courses: {
            name: string;
            id: number;
            programId: number;
            description: string | null;
            credits: number;
            teacherId: number;
            semesterId: number;
        }[];
    } & {
        number: number;
        name: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<Semester>;
    update(id: number, d: UpdateSemesterDto): Promise<Semester>;
    remove(id: number): Promise<Semester>;
}
