import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from '@prisma/client';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: number): Promise<{
        name: string;
        description: string | null;
        credits: number;
        teacherId: number;
        semesterId: number;
        programId: number;
        id: number;
    }>;
}
