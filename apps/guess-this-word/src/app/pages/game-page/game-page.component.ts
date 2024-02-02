import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'game-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
})
export class GamePageComponent {
  gameWord = 'placeholder'
    .split('')
    .sort(() => {
      return 0.5 - Math.random();
    })
    .join('');

  formGroup = this.formBuilder.group({
    userInput: [null, this.wordValidator(this.gameWord)],
  });

  wordValidator(answer: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === answer ? null : { incorrectAnswer: { value: control.value } };
    };
  }

  constructor(private formBuilder: FormBuilder) {}
}