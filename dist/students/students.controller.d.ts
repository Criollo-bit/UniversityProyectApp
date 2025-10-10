import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from '@prisma/client';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
