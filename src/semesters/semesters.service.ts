import { Injectable, NotFoundException } from '@nestjs/common'; 
import { PrismaService } from '../prisma/prisma.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { Semester } from '@prisma/client';

@Injectable()
export class SemestersService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateSemesterDto): Promise<Semester> { return this.prisma.semester.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.semester.findMany({ ...p, include: { program: true, courses: true } }); }
  // GET ONE
  async findOne(id: number): Promise<Semester> {
    const r = await this.prisma.semester.findUnique({ where: { id }, include: { program: true, courses: true } });
    if (!r) throw new NotFoundException(`Semester with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateSemesterDto): Promise<Semester> {
    try { return await this.prisma.semester.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Semester with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Semester> {
    try { return await this.prisma.semester.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Semester with ID ${id} not found or has dependencies.`); }
  }
}
