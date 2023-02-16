import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfessionalExperienceDto } from './dto/create-ProfessionalExperience.dto';
import { UpdateProfessionalExperienceDto } from './dto/update-ProfessionalExperience.dto';
import { ProfessionalExperienceService } from './professional-experience.service';
import { ProfessionalExperience } from './schemas/Professional-Experience.schemas';


@Controller('jobseeker/professional-experience')
export class ProfessionalExperienceController {

    constructor( private expService: ProfessionalExperienceService){}
 
        @Get()
        async getAllProfessionalData(): Promise<ProfessionalExperience[]> {
            return this.expService.findAll();
        }
     
        @Get(':id')
        async getProfessionalExperienceById(id: string): Promise<ProfessionalExperience> {
            return this.expService.findById(id);
        }
     
        @Post()
      async postProfessionalExperience(
        @Body()
        data: CreateProfessionalExperienceDto
      ):Promise<ProfessionalExperience> {
        return this.expService.create(data);
      }
     
        @Put(':id')
        async updateProfessionalExperience(
            @Param('id') id: string,
             @Body() data:UpdateProfessionalExperienceDto )
             :Promise<ProfessionalExperience>{
            return this.expService.UpdateById(id, data);
        }
}
