import { Injectable } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Reference } from './entities/reference.entity';
import { Model } from 'mongoose';
import { testReferenceData} from './testdata/referenses-data'

@Injectable()
export class ReferencesService {
  constructor(@InjectModel(Reference.name, 'cds') private _reference: Model<Reference>){

  }

  seed(){
    this._reference.insertMany(testReferenceData)
  }
  create(createReferenceDto: CreateReferenceDto) {
    return 'This action adds a new reference';
  }

  findAll() {
    return this._reference.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} reference`;
  }

  update(id: number, updateReferenceDto: UpdateReferenceDto) {
    return `This action updates a #${id} reference`;
  }

  remove(id: number) {
    return `This action removes a #${id} reference`;
  }
}
