import { inject } from '@angular/core';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable()
export class RandomWordService {
  private readonly httpService = inject(HttpService)

  async getRandomWord() {
    const url = 'https://random-word-api.herokuapp.com/word';
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
