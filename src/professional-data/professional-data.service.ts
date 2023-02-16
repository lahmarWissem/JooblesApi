import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProfessionalData } from './schemas/professional-data.schemas';


@Injectable()
export class ProfessionalDataService {
    constructor(@InjectModel(ProfessionalData.name)
    private proModel: mongoose.Model<ProfessionalData>) { }
   
    async findAll(): Promise<ProfessionalData[]> {
        const prodata = await this.proModel.find();
        return prodata;
    }
    async create(professionalData: ProfessionalData): Promise<ProfessionalData> {
        const res = await this.proModel.create(professionalData);
        return res;
    }
    async findById(id: string): Promise<ProfessionalData> {
        const pro = await this.proModel.findById(id);

        if (!pro) {
            throw new NotFoundException("this personal data not available !")
        }
        return pro;
    }
    async UpdatedById(id: String, prodata: ProfessionalData): Promise<ProfessionalData> {
        return await this.proModel.findByIdAndUpdate(id, prodata, {
            new: true,
            uniqueIdentifier: true,
        });
    }
    async DeleteById(id: string): Promise<ProfessionalData> {
        return await this.proModel.findByIdAndDelete(id);
    }
}
