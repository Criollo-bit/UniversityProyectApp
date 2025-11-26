import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from '@prisma/client';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateProgramDto): Promise<Program> { return this.prisma.program.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.program.findMany({ ...p, include: { students: true, semesters: true, specializations: true } }); }
  // GET ONE
  async findOne(id: number): Promise<Program> {
    const r = await this.prisma.program.findUnique({ where: { id }, include: { students: true, semesters: true, specializations: true, courses: true } });
    if (!r) throw new NotFoundException(`Program with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateProgramDto): Promise<Program> {
    try { return await this.prisma.program.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Program with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Program> {
    try { return await this.prisma.program.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Program with ID ${id} not found or has dependencies.`); }
  }
}