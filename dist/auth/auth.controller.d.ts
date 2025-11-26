import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(credentials: {
        email: string;
        pass: string;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
