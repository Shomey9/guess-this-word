import { Controller, Get } from '@nestjs/common';
import { RandomWordService } from './random-word.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Controller('random-word')
export class RandomWordController {
	private readonly randomwordService = inject(RandomWordService)

	@Get()
	public getWord(): Observable<string> {
		return this.randomwordService.getRandomWord();
	}
}
