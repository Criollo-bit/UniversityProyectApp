import { IsEmail, IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateStudentDto {
  
  @IsString()
  @IsNotEmpty()
  firstName: string; 
  
  @IsString()
  @IsNotEmpty()
  lastName: string;  
  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // Clave foránea a la Carrera 
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  programId: number; 
}