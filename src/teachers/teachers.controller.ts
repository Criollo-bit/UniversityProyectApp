import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher } from '@prisma/client';

@Controller('teachers') // Endpoint: /teachers
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  // 1. POST /teachers (Requisito mínimo DTO)
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teachersService.create(createTeacherDto); 
  }

  // 2. GET /teachers (Listado con paginación)
  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    return this.teachersService.findAll({
      skip: (pageNum - 1) * limitNum, 
      take: limitNum,
    });
  }

  // 3. GET /teachers/:id (Búsqueda por id y 404)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Teacher> {
    return this.teachersService.findOne(id);
  }
}