import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true
})
export class PersonalData {
    @Prop()
    Name: string;

    @Prop()
    FirstName: string;

    @Prop()
    Gender: string;

    @Prop()
    Dateofbirth: Date;

    @Prop()
    MaritalStatus: string;

    @Prop()
    Country: string;

    @Prop()
    Address: string;

    @Prop()
    Region: string;

    @Prop()
    City: string;

    @Prop()
    Telephone: string;

    @Prop()
    Nationality: string;

}
export const PersonalDataSchema = SchemaFactory.createForClass(PersonalData)