import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateCourseDto): Promise<Course> { return this.prisma.course.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.course.findMany({ ...p, include: { teacher: true, semester: true, program: true } }); }
  // GET ONE
  async findOne(id: number): Promise<Course> {
    const r = await this.prisma.course.findUnique({ 
      where: { id }, 
      include: { teacher: true, semester: true, program: true, enrollments: { include: { student: true } } }
    });
    if (!r) throw new NotFoundException(`Course with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateCourseDto): Promise<Course> {
    try { return await this.prisma.course.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Course with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Course> {
    try { return await this.prisma.course.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Course with ID ${id} not found or has dependencies.`); }
  }
}
