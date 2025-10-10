import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from '@prisma/client';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  // 1. POST: Crear
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    return this.prisma.student.create({ data: createStudentDto });
  }

  // 2. GET ALL: Listado con Paginación
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.student.findMany({
      ...params,
      include: {
        program: { select: { name: true } }
      }
    });
  }

  // 3. GET ONE: Incluye solo las materias que estan en cursando (Consulta Compleja)
  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        program: { select: { name: true } },
        // 💡 Consulta Compleja: Filtro dentro de la relación N:M
        enrollments: { 
          where: {
            // Requisito: Filtrar solo inscripciones activas
            status: 'CURRENT', 
          },
          // 💡 Simplificamos el select para solo incluir la relación course.
          // Si el nombre de tu relación al curso no es 'course', debes ajustarlo aquí.
          include: { 
            course: {
              select: { name: true, credits: true },
            },
          },
        },
      },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found.`);
    }
    return student;
  }
}