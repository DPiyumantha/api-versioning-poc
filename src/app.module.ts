import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferencesModule } from './references/references.module';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReferencesModule,
    ContactsModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
