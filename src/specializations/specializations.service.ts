import { Injectable, NotFoundException } from '@nestjs/common'; 
import { PrismaService } from '../prisma/prisma.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from '@prisma/client';

@Injectable()
export class SpecializationsService {
  constructor(private prisma: PrismaService) {}
  // POST
  create(d: CreateSpecializationDto): Promise<Specialization> { return this.prisma.specialization.create({ data: d }); }
  // GET ALL
  findAll(p: { skip?: number; take?: number; }) { return this.prisma.specialization.findMany({ ...p, include: { program: true } }); }
  // GET ONE
  async findOne(id: number): Promise<Specialization> {
    const r = await this.prisma.specialization.findUnique({ where: { id }, include: { program: true } });
    if (!r) throw new NotFoundException(`Specialization with ID ${id} not found.`);
    return r;
  }
  // PATCH
  async update(id: number, d: UpdateSpecializationDto): Promise<Specialization> {
    try { return await this.prisma.specialization.update({ where: { id }, data: d }); } 
    catch (e) { throw new NotFoundException(`Specialization with ID ${id} not found.`); }
  }
  // DELETE
  async remove(id: number): Promise<Specialization> {
    try { return await this.prisma.specialization.delete({ where: { id } }); } 
    catch (e) { throw new NotFoundException(`Specialization with ID ${id} not found.`); }
  }
}