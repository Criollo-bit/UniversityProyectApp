import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from '@prisma/client';

@Controller('students')
export class StudentsController {
  constructor(private readonly s: StudentsService) {}
  // POST
  @Post() create(@Body() d: CreateStudentDto): Promise<Student> { return this.s.create(d); }
  // GET ALL
  @Get() findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    return this.s.findAll({ skip, take: parseInt(limit) });
  }
  // GET ONE
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) { return this.s.findOne(id); }
  // PATCH
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateStudentDto): Promise<Student> { return this.s.update(id, d); }
  // DELETE
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number): Promise<Student> { return this.s.remove(id); }
}