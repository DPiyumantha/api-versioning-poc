import { Module } from '@nestjs/common';
import { ReferencesService } from './references.service';
import { ReferencesController } from './references.controller';
import { ReferencesControllerV2 } from './referencesv2.controller';

@Module({
  controllers: [ReferencesController,ReferencesControllerV2],
  providers: [ReferencesService],
})
export class ReferencesModule {}
