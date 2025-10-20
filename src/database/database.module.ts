import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'process';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [DatabaseService],
  imports:[ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI, { connectionName: 'cds' }),]
})
export class DatabaseModule {}
