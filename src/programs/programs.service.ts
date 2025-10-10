import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from '@prisma/client';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}

  // 1. POST: Crear
  create(createProgramDto: CreateProgramDto): Promise<Program> {
    return this.prisma.program.create({ data: createProgramDto });
  }

  // 2. GET ALL: Listado con Paginación
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.program.findMany({
      ...params,
      // Inclui Semesters y Specializations para el listado
      include: {
        semesters: { select: { name: true, number: true } },
        specializations: { select: { name: true } },
      }
    });
  }

  // 3. GET ONE: Por ID
  async findOne(id: number) {
    const program = await this.prisma.program.findUnique({
      where: { id },
      include: {
        // Relaciones clave
        students: { select: { firstName: true, lastName: true } },
        semesters: { select: { name: true, number: true } },
        specializations: { select: { name: true } },
        courses: { select: { name: true, credits: true } }
      }
    });

    if (!program) {
      throw new NotFoundException(`Program with ID ${id} not found.`);
    }
    return program;
  }
}