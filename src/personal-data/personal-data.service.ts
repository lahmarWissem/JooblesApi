import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { PersonalData } from './schemas/personal-data.schema';

@Injectable()
export class PersonalDataService {
    constructor (
        @InjectModel(PersonalData.name)
        private personalModel : mongoose.Model<PersonalData>
    ){}

    async findAll(): Promise<PersonalData[]> {
        const PersonalDatas = await this.personalModel.find();
        return PersonalDatas;
    }
    async create(personalData: PersonalData): Promise<PersonalData>{
        const res = await this.personalModel.create(personalData);
        return res ;
    }
    async findbyid(id: string): Promise<PersonalData> {
        const per = await this.personalModel.findById(id);
        if(!per){
            throw new NotFoundException("this personal data not available !")

        }
        return per; 
    }
    async Updatebyid(id: string , personaldata: PersonalData): Promise<PersonalData> {
        return await this.personalModel.findByIdAndUpdate(id, personaldata, {
            new: true,
            uniqueIdentifier:true,
        } );
        
    }
    async Deleteyid(id: string ): Promise<PersonalData> {
        return await this.personalModel.findByIdAndDelete(id);
        
    }
}
