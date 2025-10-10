import { IsNotEmpty, IsInt, IsString, Min } from 'class-validator';

export class CreateProgramDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  // Duración de la carrera en semestres 
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  duration_semesters: number; 
}