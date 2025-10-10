import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from '@prisma/client';
export declare class TeachersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        courses: {
            name: string;
            credits: number;
        }[];
    } & {
        firstName: string;
        lastName: string;
        email: string;
        id: number;
    })[]>;
    findOne(id: number): Promise<Teacher>;
}
