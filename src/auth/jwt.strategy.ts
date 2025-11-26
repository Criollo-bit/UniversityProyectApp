import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Usamos el OR para garantizar que secretOrKey sea un string
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'FALLBACK_SECRET_KEY', 
    });
  }

  // Lógica de Validación
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}