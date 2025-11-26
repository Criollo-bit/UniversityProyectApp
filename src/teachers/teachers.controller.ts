import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch, Delete } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from '@prisma/client';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly s: TeachersService) {}
  // POST
  @Post() create(@Body() d: CreateTeacherDto): Promise<Teacher> { return this.s.create(d); }
  // GET ALL
  @Get() findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    return this.s.findAll({ skip, take: parseInt(limit) });
  }
  // GET ONE
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number): Promise<Teacher> { return this.s.findOne(id); }
  // PATCH
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateTeacherDto): Promise<Teacher> { return this.s.update(id, d); }
  // DELETE
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number): Promise<Teacher> { return this.s.remove(id); }
}