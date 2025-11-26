import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module'; 
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module'; 
import { ProgramsModule } from './programs/programs.module';
import { CoursesModule } from './courses/courses.module';
import { SemestersModule } from './semesters/semesters.module';
import { SpecializationsModule } from './specializations/specializations.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    // modulos de la app :3
    PrismaModule, 
    TeachersModule,
    StudentsModule, 
    ProgramsModule,
    CoursesModule,
    SemestersModule,
    SpecializationsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],  
})
export class AppModule {}