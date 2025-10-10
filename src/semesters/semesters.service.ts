// src/semesters/semesters.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { Semester } from '@prisma/client';

@Injectable()
export class SemestersService {
  constructor(private prisma: PrismaService) {}

  // 1. POST: Crear 
  create(createSemesterDto: CreateSemesterDto): Promise<Semester> {
    return this.prisma.semester.create({ data: createSemesterDto });
  }

  // 2. GET ALL: Listado con Paginación 
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.semester.findMany({
      ...params,
      include: {
        program: { select: { name: true } },
        courses: { select: { name: true, credits: true } }
      }
    });
  }

  // 3. GET ONE: Por ID
  async findOne(id: number): Promise<Semester> {
    const semester = await this.prisma.semester.findUnique({
      where: { id },
      include: {
        program: { select: { name: true } },
        courses: { select: { name: true, credits: true } }
      }
    });

    if (!semester) {
      throw new NotFoundException(`Semester with ID ${id} not found.`);
    }
    return semester;
  }
}