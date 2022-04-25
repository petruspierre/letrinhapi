import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PracticeWord,
  PracticeWordDocument,
} from './schemas/practice-word.schema';
import { Model } from 'mongoose';
import { GetRandomWordDto } from './dto/get-random-word.dto';

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
  async findRandom({ wordLength, sampleSize }: GetRandomWordDto) {
    const randomWord = await this.practiceWordModel.aggregate([
      { $match: { length: parseInt(wordLength) ?? 5 } },
      { $sample: { size: parseInt(sampleSize) ?? 1 } },
    ]);

    return randomWord;
  }
}
