import { SemestersService } from './semesters.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { Semester } from '@prisma/client';
export declare class SemestersController {
    private readonly semestersService;
    constructor(semestersService: SemestersService);
    create(createSemesterDto: CreateSemesterDto): Promise<Semester>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
        };
        courses: {
            name: string;
            credits: number;
        }[];
    } & {
        number: number;
        name: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<{
        number: number;
        name: string;
        id: number;
        programId: number;
    }>;
}
