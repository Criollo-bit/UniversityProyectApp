import { Injectable, NotFoundException } from '@nestjs/common'; 
import { PrismaService } from '../prisma/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from '@prisma/client';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateTeacherDto): Promise<Teacher> { return this.prisma.teacher.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.teacher.findMany({ ...p, include: { courses: true } }); }
  // GET ONE
  async findOne(id: number): Promise<Teacher> {
    const r = await this.prisma.teacher.findUnique({ where: { id }, include: { courses: true } });
    if (!r) throw new NotFoundException(`Teacher with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateTeacherDto): Promise<Teacher> {
    try { return await this.prisma.teacher.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Teacher with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Teacher> {
    try { return await this.prisma.teacher.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Teacher with ID ${id} not found.`); }
  }
}