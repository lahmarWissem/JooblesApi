import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { ProfessionalDataModule } from './professional-data/professional-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
     PersonalDataModule,
    MongooseModule.forRoot(process.env.DB_URI),
    ProfessionalDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
