import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true
})

export class ProfessionalData {
    @Prop()
    Title: string;
  
    @Prop()
    LevelOfEducation: string;
  
    @Prop()
    LevelOfExperience: string;
  
    @Prop()
    CurrentNetSalary: number;
  
    @Prop()
    ProfessionalSituation: string;
  
    @Prop()
    Availability: string;
  
    @Prop()
    DesiredMinimumNetSalary: number;
  
    @Prop()
    Occupations: string;
  
    @Prop()
    SectorsOfActivity: string;
  
    @Prop()
    TypesOfPositions: string;
  
    @Prop()
    DesiredWorkLocations: string;
  
    @Prop()
    Occupation: string;
  
    @Prop()
    Mobility: string;
    
}
export const ProfessionalDataSchema = SchemaFactory.createForClass(ProfessionalData);