import { IsNotEmpty, IsInt, IsString, Min } from 'class-validator';

export class CreateSemesterDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  number: number;

  // Clave Foránea a Program (Carrera)
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  programId: number;
}