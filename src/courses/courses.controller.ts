import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Patch, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from '@prisma/client';

@Controller('courses')
export class CoursesController {
  constructor(private readonly s: CoursesService) {}
  // POST
  @Post() create(@Body() d: CreateCourseDto): Promise<Course> { return this.s.create(d); }
  // GET ALL
  @Get() findAll(@Query('page') page: string = '1', @Query('limit') limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    return this.s.findAll({ skip, take: parseInt(limit) });
  }
  // GET ONE
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number): Promise<Course> { return this.s.findOne(id); }
  // PATCH
  @Patch(':id') update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateCourseDto): Promise<Course> { return this.s.update(id, d); }
  // DELETE
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number): Promise<Course> { return this.s.remove(id); }
}