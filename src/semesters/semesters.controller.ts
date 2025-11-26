import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch, Delete } from '@nestjs/common';
import { SemestersService } from './semesters.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { UpdateSemesterDto } from './dto/update-semester.dto';
import { Semester } from '@prisma/client';

@Controller('semesters')
export class SemestersController {
  constructor(private readonly s: SemestersService) {}
  // POST
  @Post() create(@Body() d: CreateSemesterDto): Promise<Semester> { return this.s.create(d); }
  // GET ALL
  @Get() findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    return this.s.findAll({ skip, take: parseInt(limit) });
  }
  // GET ONE
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number): Promise<Semester> { return this.s.findOne(id); }
  // PATCH
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateSemesterDto): Promise<Semester> { return this.s.update(id, d); }
  // DELETE
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number): Promise<Semester> { return this.s.remove(id); }
}