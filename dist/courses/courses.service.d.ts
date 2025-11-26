import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from '@prisma/client';
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(d: CreateCourseDto): Promise<Course>;
    findAll(p: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        teacher: {
            firstName: string;
            lastName: string;
            email: string;
            id: number;
        };
        program: {
            name: string;
            id: number;
            duration_semesters: number;
        };
        semester: {
            number: number;
            name: string;
            id: number;
            programId: number;
        };
    } & {
        name: string;
        id: number;
        programId: number;
        description: string | null;
        credits: number;
        teacherId: number;
        semesterId: number;
    })[]>;
    findOne(id: number): Promise<Course>;
    update(id: number, d: UpdateCourseDto): Promise<Course>;
    remove(id: number): Promise<Course>;
}
