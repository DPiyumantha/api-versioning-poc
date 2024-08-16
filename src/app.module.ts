import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferencesModule } from './references/references.module';

@Module({
  imports: [ReferencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
