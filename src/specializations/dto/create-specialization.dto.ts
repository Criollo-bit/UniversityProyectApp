import { IsNotEmpty, IsInt, IsString, Min } from 'class-validator';

export class CreateSpecializationDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  // Clave Foránea a Carrera
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  programId: number;
}