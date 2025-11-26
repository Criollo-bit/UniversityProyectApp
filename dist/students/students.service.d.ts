import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from '@prisma/client';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(d: CreateStudentDto): Promise<Student>;
    findAll(p: {
        skip?: number;
        take?: number;
    }): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            id: number;
            name: string;
            duration_semesters: number;
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
            id: number;
            name: string;
            duration_semesters: number;
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
    findOneByEmail(email: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        programId: number;
    } | null>;
    update(id: number, d: UpdateStudentDto): Promise<Student>;
    remove(id: number): Promise<Student>;
}
