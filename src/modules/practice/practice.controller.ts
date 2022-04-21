import { Controller, Get, Post, Body } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { GetRandomWordDto } from './dto/get-random-word.dto';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Post()
  create(@Body() createPracticeDto: CreatePracticeDto) {
    const { word } = createPracticeDto;
    return this.practiceService.create({ word, length: word.length });
  }

  @Get()
  findAll() {
    return this.practiceService.findAll();
  }

  @Get('/random')
  findRandom(@Body() getRandomWordDto: GetRandomWordDto) {
    const { wordLength, sampleSize } = getRandomWordDto;
    return this.practiceService.findRandom({ wordLength, sampleSize });
  }
}
