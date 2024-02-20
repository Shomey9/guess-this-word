import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private readonly httpClient = inject(HttpClient);
  url = 'https://random-word-api.herokuapp.com/word';

  getRandomWord(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url)
  }
}
