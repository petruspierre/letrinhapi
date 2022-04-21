import 'dotenv/config';
import mongoose from 'mongoose';

import practiceWords from '../../data/practiceWords.json';

import { PracticeWordSchema } from '../../src/modules/practice/schemas/practice-word.schema';

mongoose
  .connect(process.env.MONGO_DATABASE_URL)
  .then(() => {
    console.log('Connected to Mongo database');
  })
  .catch((err) => {
    console.log('Error connecting to Mongo database ', err);
  });

const seedWords = [
  ...practiceWords['5'].map((word) => ({
    word,
    length: word.length,
  })),
  ...practiceWords['6'].map((word) => ({
    word,
    length: word.length,
  })),
];

const PracticeWord = mongoose.model('PracticeWord', PracticeWordSchema);

const seedDB = async () => {
  await PracticeWord.deleteMany({});
  await PracticeWord.insertMany(seedWords);
};

seedDB().then(() => {
  mongoose.connection.close();
});
