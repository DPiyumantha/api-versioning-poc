import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferencesModule } from './references/references.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ReferencesModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
