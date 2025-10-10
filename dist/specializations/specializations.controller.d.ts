import { SpecializationsService } from './specializations.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { Specialization } from '@prisma/client';
export declare class SpecializationsController {
    private readonly specializationsService;
    constructor(specializationsService: SpecializationsService);
    create(createSpecializationDto: CreateSpecializationDto): Promise<Specialization>;
    findAll(page?: string, limit?: string): import(".prisma/client").Prisma.PrismaPromise<({
        program: {
            name: string;
            duration_semesters: number;
        };
    } & {
        name: string;
        id: number;
        programId: number;
    })[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        programId: number;
    }>;
}
