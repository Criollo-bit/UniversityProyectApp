import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // Importamos el guard para proteger el perfil

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Endpoint: POST /auth/login Genera el Token
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

  // Endpoint Opcional: GET /auth/profile q devuelve la información del usuario
  @UseGuards(JwtAuthGuard) // Solo permite acceso si el token es válido
  @Get('profile')
  getProfile(@Request() req) {
    // La estrategia JWT adjunta la información del usuario verificada 
    return req.user; 
  }
}