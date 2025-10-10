import { PrismaService } from '../prisma/prisma.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { Semester } from '@prisma/client';
export declare class SemestersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSemesterDto: CreateSemesterDto): Promise<Semester>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: number): Promise<Semester>;
}
