// src/auth/auth.controller.ts

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // 🛑 Endpoint: /auth/login
  @Post('login')
  async login(@Body() credentials: { email: string; pass: string }) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.pass,
    );
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }
    
    // Genera y retorna el token
    return this.authService.login(user); 
  }
}