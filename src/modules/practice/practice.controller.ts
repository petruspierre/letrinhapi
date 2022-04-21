import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { CreatePracticeDto } from './dto/create-practice.dto';

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
  findRandom(
    @Param('wordLength') wordLength = 5,
    @Param('sampleSize') sampleSize = 1,
  ) {
    return this.practiceService.findRandom({ wordLength, sampleSize });
  }
}
