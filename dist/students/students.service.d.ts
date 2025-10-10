import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from '@prisma/client';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(params: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
        };
    } & {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        programId: number;
    })[]>;
    findOne(id: number): Promise<{
        program: {
            name: string;
        };
        enrollments: ({
            course: {
                name: string;
                credits: number;
            };
        } & {
            status: string;
            studentId: number;
            courseId: number;
            enrollmentDate: Date;
            finalGrade: number | null;
        })[];
    } & {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        programId: number;
    }>;
}
