import { Controller, Get, Put, Delete, Post, Body, Param } from '@nestjs/common';
import { RandomService } from '../services/random.service';

@Controller('/random')

export class RandomController {
    constructor(private randomService: RandomService) { }

    @Get()
    showRandom() {
        return this.randomService.showNumbers()
    }
}