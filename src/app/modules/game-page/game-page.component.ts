import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'game-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
})
export class GamePageComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly wordService = inject(WordService);

  gameWord = 'Ady'.toLowerCase()
    .split('')
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join('');

  formGroup = this.formBuilder.group({
    userInput: [null, this.wordValidator('Ady'.toLowerCase())],
  });

  giveMeAWord = this.wordService.getRandomWord()

  wordValidator(answer: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === answer ? null : { incorrectAnswer: { value: control.value } };
    };
  }
}