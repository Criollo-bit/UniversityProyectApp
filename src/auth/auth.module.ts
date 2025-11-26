// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StudentsModule } from '../students/students.module'; // Usaremos Students para la validación

@Module({
  imports: [
    StudentsModule, // Módulo para verificar las credenciales del usuario
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET, // 🛑 LEE la clave del .env
        signOptions: { expiresIn: '60m' }, // Token válido por 60 minutos
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}