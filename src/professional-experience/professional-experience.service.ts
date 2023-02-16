import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProfessionalExperience, ProfessionalExperienceSchema } from './schemas/Professional-Experience.schemas';

@Injectable()
export class ProfessionalExperienceService {  
    constructor(@InjectModel(ProfessionalExperience.name)
    private expModel: mongoose.Model<ProfessionalExperience>) { }  
     async findAll(): Promise<ProfessionalExperience[]> {
        const results = this.expModel.find();
        return results;
    }
    async findById(id: string): Promise<ProfessionalExperience> {
        const results = this.expModel.findById(id);
        if (!results) {
            throw new NotFoundException("Could not find matching identifier");
        }
        return results;
    }
    async create(data: ProfessionalExperience): Promise<ProfessionalExperience> {
        const results = await this.expModel.create(data);
        return results;
    }
    async UpdateById(id: string, data:ProfessionalExperience): Promise<ProfessionalExperience>{
        const results = await this.expModel.findByIdAndUpdate(id, data,{
            new: true,
            uniqueIdentifier: true,
        });
        return results;
    }
    async deleteById(id: string): Promise<ProfessionalExperience> {
        const results = await this.expModel.findByIdAndDelete(id);
        return results;
    }
 
}
