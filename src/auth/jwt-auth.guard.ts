import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// Llama a la estrategia jwt que acabamos de crear
export class JwtAuthGuard extends AuthGuard('jwt') {}