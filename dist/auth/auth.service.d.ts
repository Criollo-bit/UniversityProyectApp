import { StudentsService } from '../students/students.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private studentsService;
    private jwtService;
    constructor(studentsService: StudentsService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
