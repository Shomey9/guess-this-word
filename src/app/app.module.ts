import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './modules/game-page/game-page.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, GamePageComponent, AppComponent, ReactiveFormsModule
  ]
})
export class AppModule { }
