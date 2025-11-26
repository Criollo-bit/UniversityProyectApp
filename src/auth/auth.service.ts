// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private studentsService: StudentsService, // Usamos StudentsService para simular la DB
    private jwtService: JwtService,
  ) {}

  // 1. Validar Credenciales (Simulado para JWT)
  async validateUser(email: string, pass: string): Promise<any> {
    // 🛑 Lógica Simplificada: Solo verifica que el usuario exista por email.
    // En un proyecto real, se verificaría la contraseña hasheada.
    const user = await this.studentsService.findOneByEmail(email);

    if (user && pass === 'password') { // Simulamos que la contraseña es 'password'
      const { email, id, firstName } = user;
      return { id, email, firstName }; // Devuelve un objeto sin la contraseña
    }
    return null;
  }

  // 2. Generar Token JWT
  async login(user: any) {
    const payload = { 
      username: user.email, 
      sub: user.id 
    };
    return {
      access_token: this.jwtService.sign(payload), // Genera el token
    };
  }
}