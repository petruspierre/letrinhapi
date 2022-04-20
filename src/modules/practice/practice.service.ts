import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PracticeWord,
  PracticeWordDocument,
} from './schemas/practice-word.schema';
import { Model } from 'mongoose';

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(PracticeWord.name)
    private practiceWordModel: Model<PracticeWordDocument>,
  ) {}

  create(data: PracticeWord): Promise<PracticeWord> {
    const createdWord = new this.practiceWordModel(data);
    return createdWord.save();
  }

  findAll() {
    return this.practiceWordModel.find().exec();
  }
}
