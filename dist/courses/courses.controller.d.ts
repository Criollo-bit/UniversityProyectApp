import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from '@prisma/client';
export declare class CoursesController {
    private readonly s;
    constructor(s: CoursesService);
    create(d: CreateCourseDto): Promise<Course>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
