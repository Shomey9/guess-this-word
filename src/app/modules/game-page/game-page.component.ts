import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RandomWordService } from 'apps/server/src/random-word/random-word.service';
import { map, of } from 'rxjs';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function wordValidator(randomWord$: Observable<string>): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return randomWord$.pipe(
      switchMap(randomWord => {
        return of(control.value === randomWord ? null : { incorrectAnswer: { value: control.value } });
      })
    );
  };
}

@Component({
  selector: 'game-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent {
  private readonly randomWordService = inject(RandomWordService)
  private readonly formBuilder = inject(FormBuilder)
 
  viewModel$ = this.randomWordService.getRandomWord().pipe(
    map(randomWord => ({
      randomWord,
      scrambleWord: () => randomWord.split('').sort(() => 0.5 - Math.random()).join('')
    }))
  );

  formGroup = this.formBuilder.group({
    userInput: [null, wordValidator(this.viewModel$.pipe(map(({ randomWord }) => randomWord)))],
  });
}
