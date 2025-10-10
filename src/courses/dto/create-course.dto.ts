import { IsNotEmpty, IsInt, IsString, Min, IsOptional } from 'class-validator';

export class CreateCourseDto {
  
  @IsString()
  @IsNotEmpty()
  name: string; 
  
  @IsString()
  @IsOptional() // AÑADIDO: Permite omitir el campo en el JSON
  description?: string; // Esto lo hace opcional en TypeScript
  
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  credits: number;

  // 1. Clave Foránea a Teacher
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  teacherId: number; 
  
  // 2. Clave Foránea a Semester
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  semesterId: number;

  // 3. Clave Foránea a Program
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  programId: number;
}