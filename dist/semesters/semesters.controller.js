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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemestersController = void 0;
const common_1 = require("@nestjs/common");
const semesters_service_1 = require("./semesters.service");
const create_semester_dto_1 = require("./dto/create-semester.dto");
const update_semester_dto_1 = require("./dto/update-semester.dto");
let SemestersController = class SemestersController {
    s;
    constructor(s) {
        this.s = s;
    }
    create(d) { return this.s.create(d); }
    findAll(page = '1', limit = '10') {
        const skip = (parseInt(page) - 1) * parseInt(limit);
        return this.s.findAll({ skip, take: parseInt(limit) });
    }
    findOne(id) { return this.s.findOne(id); }
    update(id, d) { return this.s.update(id, d); }
    remove(id) { return this.s.remove(id); }
};
exports.SemestersController = SemestersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_semester_dto_1.CreateSemesterDto]),
    __metadata("design:returntype", Promise)
], SemestersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SemestersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SemestersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_semester_dto_1.UpdateSemesterDto]),
    __metadata("design:returntype", Promise)
], SemestersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SemestersController.prototype, "remove", null);
exports.SemestersController = SemestersController = __decorate([
    (0, common_1.Controller)('semesters'),
    __metadata("design:paramtypes", [semesters_service_1.SemestersService])
], SemestersController);
//# sourceMappingURL=semesters.controller.js.map