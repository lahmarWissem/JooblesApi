import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePersonalDataDto } from './dto/create-personal.dto';
import { UpdatePersonalDataDto } from './dto/update-personal.dto';
import { PersonalDataService } from './personal-data.service';
import { PersonalData } from './schemas/personal-data.schema';

@Controller('jobseeker')
export class PersonalDataController {
    constructor(private personalservices: PersonalDataService) { }

    @Get()
    async getAllPersonalData(): Promise<PersonalData[]> {
        return this.personalservices.findAll();
    }

    @Post()
    async cratePersonal(
        @Body()
        PersonalData: CreatePersonalDataDto
    ): Promise<PersonalData> {
        return this.personalservices.create(PersonalData);
    }

    @Get(":id")
    async getPersonalDataById(
        @Param('id')
        id: string
    ): Promise<PersonalData> {
        return this.personalservices.findbyid(id);
    }

    @Put(':id')
    async updatePersonal(
        @Param('id')
        id: string,
        @Body()
        personalData: UpdatePersonalDataDto
    ): Promise<PersonalData> {
        return this.personalservices.Updatebyid(id, personalData);
    }
    @Delete(":id")
    async DeletePersonalDataById(
        @Param('id')
        id: string
    ): Promise<PersonalData> {
        return this.personalservices.Deleteyid(id);
    }
}
