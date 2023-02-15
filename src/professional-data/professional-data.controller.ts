import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfessionalDataDto } from './dto/create-professional.to';
import { UpdateProfessionalDataDto } from './dto/update-professional.to';
import { ProfessionalDataService } from './professional-data.service';
import { ProfessionalData } from './schemas/professional-data.schemas';

@Controller('jobseeker/professional-data')
export class ProfessionalDataController {
    constructor(private proServices: ProfessionalDataService) { }
    @Get()
    async getAllProfessionalData(): Promise<ProfessionalData[]> {
        return this.proServices.findAll();
    }
    @Post()
    async createProfessional(
        @Body()
        ProData: CreateProfessionalDataDto): Promise<ProfessionalData> {
        return this.proServices.create(ProData)
    }
    @Get(':id')
    async getProfessionalDataById(@Param('id') id: string): Promise<ProfessionalData> {
        return this.proServices.findById(id);
    }
    @Put(':id')
    async updateProfessional(@Param('id') id: string, @Body() prodata: UpdateProfessionalDataDto): Promise<ProfessionalData> {
        return this.proServices.UpdatedById(id, prodata);
    }
    @Delete(':id')
    async deleteProfessional(@Param('id') id: string): Promise<ProfessionalData> {
        return this.proServices.DeleteById(id);
    }
}
