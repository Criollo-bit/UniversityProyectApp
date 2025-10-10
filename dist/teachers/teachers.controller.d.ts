import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from '@prisma/client';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    create(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
