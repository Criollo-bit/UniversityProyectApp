import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from '@prisma/client';
export declare class StudentsController {
    private readonly s;
    constructor(s: StudentsService);
    create(d: CreateStudentDto): Promise<Student>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
            id: number;
            duration_semesters: number;
        };
    } & {
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<{
        program: {
            name: string;
            id: number;
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
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        programId: number;
    }>;
    update(id: number, d: UpdateStudentDto): Promise<Student>;
    remove(id: number): Promise<Student>;
}
