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

  // Get a random value in practiceWordModel mongoose collection
  async findRandom() {
    const randomWord = await this.practiceWordModel.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, word: 1 } },
    ]);

    return randomWord[0];
  }
}
