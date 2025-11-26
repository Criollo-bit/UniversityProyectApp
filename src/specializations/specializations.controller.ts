import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch, Delete } from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';
import { Specialization } from '@prisma/client';

@Controller('specializations')
export class SpecializationsController {
  constructor(private readonly s: SpecializationsService) {}
  // POST
  @Post() create(@Body() d: CreateSpecializationDto): Promise<Specialization> { return this.s.create(d); }
  // GET ALL
  @Get() findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    return this.s.findAll({ skip, take: parseInt(limit) });
  }
  // GET ONE
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number): Promise<Specialization> { return this.s.findOne(id); }
  // PATCH
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateSpecializationDto): Promise<Specialization> { return this.s.update(id, d); }
  // DELETE
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number): Promise<Specialization> { return this.s.remove(id); }
}