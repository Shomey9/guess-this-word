import { inject } from '@angular/core';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class RandomWordService {
  private readonly httpService = inject(HttpService)
  url = 'https://random-word-api.herokuapp.com/word';

  getRandomWord(): Observable<string> {
    return this.httpService.get<string[]>(this.url).pipe(
      map(({ data: [string] }: AxiosResponse<string[]>) => string)
    )
  }
}
