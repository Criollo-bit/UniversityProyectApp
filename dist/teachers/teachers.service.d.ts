import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from '@prisma/client';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(d: CreateTeacherDto): Promise<Teacher>;
    findAll(p: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
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
        firstName: string;
        lastName: string;
        email: string;
        id: number;
    })[]>;
    findOne(id: number): Promise<Teacher>;
    update(id: number, d: UpdateTeacherDto): Promise<Teacher>;
    remove(id: number): Promise<Teacher>;
}
