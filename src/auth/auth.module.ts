import { Module } from '@nestjs/common'; 
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StudentsModule } from '../students/students.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    StudentsModule, 
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET!, 
        signOptions: { expiresIn: '60m' },
      }),
    }),
  ],
  controllers: [AuthController],
  // Añadimos JwtStrategy como proveedor
  providers: [AuthService, JwtStrategy], 
  // Exportamos JwtModule para que otros modulos puedan usar JwtService
  exports: [JwtModule], 
})
export class AuthModule {}