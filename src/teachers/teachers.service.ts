// src/teachers/teachers.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from '@prisma/client';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  // POST: Crear
  create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.prisma.teacher.create({ data: createTeacherDto });
  }
  
  // GET ALL: Listado con Paginación
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.teacher.findMany({
      ...params,
      include: {
        courses: { // Incluimos los cursos que imparte
          select: { name: true, credits: true }
        }
      }
    });
  }
  
  // GET ONE: Por ID con relaciones y 404
  async findOne(id: number): Promise<Teacher> {
    const teacher = await this.prisma.teacher.findUnique({
      where: { id },
      include: { courses: { select: { name: true, credits: true } } }
    });
    
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found.`);
    }
    return teacher;
  }
}