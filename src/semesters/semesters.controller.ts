import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SemestersService } from './semesters.service';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { Semester } from '@prisma/client';

@Controller('semesters')
export class SemestersController {
  constructor(private readonly semestersService: SemestersService) {}

  // 1. POST semesters
  @Post()
  create(@Body() createSemesterDto: CreateSemesterDto): Promise<Semester> {
    return this.semestersService.create(createSemesterDto);
  }

  // 2. GET semesters 
  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    return this.semestersService.findAll({
      skip: (pageNum - 1) * limitNum, 
      take: limitNum,
    });
  }

  // 3. GET semesters/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.semestersService.findOne(id);
  }
}