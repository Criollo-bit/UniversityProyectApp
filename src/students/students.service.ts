import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from '@prisma/client';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateStudentDto): Promise<Student> { return this.prisma.student.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.student.findMany({ ...p, include: { program: true } }); }
// GET ONE (CONSULTA COMPLEJA)
  async findOne(id: number) {
    const r = await this.prisma.student.findUnique({
      where: { id },
      include: {
        program: true,
        enrollments: { 
          where: { status: 'CURRENT' }, 
          include: { 
            course: { select: { name: true, credits: true } },
          },
        },
      },
    });
    if (!r) throw new NotFoundException(`Student with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateStudentDto): Promise<Student> {
    try { return await this.prisma.student.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Student with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Student> {
    try { return await this.prisma.student.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Student with ID ${id} not found.`); }
  }
}
