"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemestersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SemestersService = class SemestersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(d) { return this.prisma.semester.create({ data: d }); }
    findAll(p) { return this.prisma.semester.findMany({ ...p, include: { program: true, courses: true } }); }
    async findOne(id) {
        const r = await this.prisma.semester.findUnique({ where: { id }, include: { program: true, courses: true } });
        if (!r)
            throw new common_1.NotFoundException(`Semester with ID ${id} not found.`);
        return r;
    }
    async update(id, d) {
        try {
            return await this.prisma.semester.update({ where: { id }, data: d });
        }
        catch (e) {
            throw new common_1.NotFoundException(`Semester with ID ${id} not found.`);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.semester.delete({ where: { id } });
        }
        catch (e) {
            throw new common_1.NotFoundException(`Semester with ID ${id} not found or has dependencies.`);
        }
    }
};
exports.SemestersService = SemestersService;
exports.SemestersService = SemestersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SemestersService);
//# sourceMappingURL=semesters.service.js.map