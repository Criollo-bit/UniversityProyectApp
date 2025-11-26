import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private studentsService: StudentsService,
    private jwtService: JwtService,
  ) {}

  // Validar Credenciales
  async validateUser(email: string, pass: string): Promise<any> {
    //Busca al usuario
    const user = await this.studentsService.findOneByEmail(email);

    //Si no encuentra el usuario devuelve null inmediatamente.
    if (!user) { 
      return null; 
    }
    
    //Simulación de verificación de contraseña
    if (pass === 'password') { 
      // Si la contraseña es correcta prepara el payload del token
      const { id, firstName } = user;
      return { id, email: user.email, firstName }; 
    }

    //Si la contraseña es incorrecta
    return null;
  }

  //Generar Token JWT
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