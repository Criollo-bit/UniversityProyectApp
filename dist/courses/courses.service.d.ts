import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from '@prisma/client';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        teacher: {
            firstName: string;
            lastName: string;
        };
        semester: {
            number: number;
            name: string;
        };
        program: {
            name: string;
        };
    } & {
        name: string;
        description: string | null;
        credits: number;
        teacherId: number;
        semesterId: number;
        programId: number;
        id: number;
    })[]>;
    findOne(id: number): Promise<Course>;
}
