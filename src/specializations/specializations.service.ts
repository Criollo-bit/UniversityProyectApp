// src/specializations/specializations.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { Specialization } from '@prisma/client';

@Injectable()
export class SpecializationsService {
  constructor(private prisma: PrismaService) {}

  // 1. POST: Crear
  create(createSpecializationDto: CreateSpecializationDto): Promise<Specialization> {
    return this.prisma.specialization.create({ data: createSpecializationDto });
  }

  // 2. GET ALL: Listado con Paginación
  findAll(params: { skip?: number; take?: number; }) {
    return this.prisma.specialization.findMany({
      ...params,
      include: {
        program: { select: { name: true, duration_semesters: true } },
      }
    });
  }

  // 3. GET ONE: Por ID 
  async findOne(id: number): Promise<Specialization> {
    const specialization = await this.prisma.specialization.findUnique({
      where: { id },
      include: {
        program: { select: { name: true } },
      }
    });

    if (!specialization) {
      throw new NotFoundException(`Specialization with ID ${id} not found.`);
    }
    return specialization;
  }
}