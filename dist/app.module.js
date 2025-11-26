"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const teachers_module_1 = require("./teachers/teachers.module");
const students_module_1 = require("./students/students.module");
const programs_module_1 = require("./programs/programs.module");
const courses_module_1 = require("./courses/courses.module");
const semesters_module_1 = require("./semesters/semesters.module");
const specializations_module_1 = require("./specializations/specializations.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            teachers_module_1.TeachersModule,
            students_module_1.StudentsModule,
            programs_module_1.ProgramsModule,
            courses_module_1.CoursesModule,
            semesters_module_1.SemestersModule,
            specializations_module_1.SpecializationsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map