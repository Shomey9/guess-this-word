import { Controller, Get } from '@nestjs/common';
import { RandomWordService } from './random-word.service';

@Controller('random-word')
export class RandomWordController {
	constructor(
		private readonly randomwordService: RandomWordService
	) {}

	@Get()
	public getRandomWord() {
		return this.randomwordService.getRandomWord
	}
}
