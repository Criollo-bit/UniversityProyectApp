// src/specializations/specializations.controller.ts

import { Controller, Get, Post, Body, Param, ParseIntPipe, Query } from '@nestjs/common';
import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { Specialization } from '@prisma/client';

@Controller('specializations')
export class SpecializationsController {
  constructor(private readonly specializationsService: SpecializationsService) {}

  // 1. POST specializations
  @Post()
  create(@Body() createSpecializationDto: CreateSpecializationDto): Promise<Specialization> {
    return this.specializationsService.create(createSpecializationDto);
  }

  // 2. GET specializations
  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    return this.specializationsService.findAll({
      skip: (pageNum - 1) * limitNum, 
      take: limitNum,
    });
  }

  // 3. GET specializations
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.specializationsService.findOne(id);
  }
}