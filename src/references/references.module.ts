import { Module } from '@nestjs/common';
import { ReferencesService } from './references.service';
import { ReferencesController } from './references.controller';
import { ReferencesControllerV2 } from './referencesv2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reference, ReferenceSchema } from './entities/reference.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature(
      [{ name: Reference.name, schema: ReferenceSchema }],
      'cds',
    ),
  ],
  controllers: [ReferencesController, ReferencesControllerV2],
  providers: [ReferencesService],
})
export class ReferencesModule {}
