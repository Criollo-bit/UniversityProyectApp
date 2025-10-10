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
exports.SpecializationsController = void 0;
const common_1 = require("@nestjs/common");
const specializations_service_1 = require("./specializations.service");
const create_specialization_dto_1 = require("./dto/create-specialization.dto");
let SpecializationsController = class SpecializationsController {
    specializationsService;
    constructor(specializationsService) {
        this.specializationsService = specializationsService;
    }
    create(createSpecializationDto) {
        return this.specializationsService.create(createSpecializationDto);
    }
    findAll(page = '1', limit = '10') {
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        return this.specializationsService.findAll({
            skip: (pageNum - 1) * limitNum,
            take: limitNum,
        });
    }
    findOne(id) {
        return this.specializationsService.findOne(id);
    }
};
exports.SpecializationsController = SpecializationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialization_dto_1.CreateSpecializationDto]),
    __metadata("design:returntype", Promise)
], SpecializationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecializationsController.prototype, "findOne", null);
exports.SpecializationsController = SpecializationsController = __decorate([
    (0, common_1.Controller)('specializations'),
    __metadata("design:paramtypes", [specializations_service_1.SpecializationsService])
], SpecializationsController);
//# sourceMappingURL=specializations.controller.js.map