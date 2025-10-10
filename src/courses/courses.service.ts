import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  // 1. POST: Crear
  create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({ data: createCourseDto });
  }

  // 2. GET ALL: Listado con Paginación
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.course.findMany({
      ...params,
      // Inclui las 3 relaciones clave en el listado
      include: {
        teacher: { select: { firstName: true, lastName: true } },
        semester: { select: { name: true, number: true } },
        program: { select: { name: true } },
      }
    });
  }

  // 3. GET ONE: Por ID
  async findOne(id: number): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        teacher: { select: { firstName: true, lastName: true } },
        semester: { select: { name: true, number: true } },
        program: { select: { name: true } },
        // Inclui a los estudiantes inscritos (N:M)
        enrollments: { 
          select: {
            student: { select: { firstName: true, lastName: true } },
            status: true,
          }
        }
      }
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }
    return course;
  }
}