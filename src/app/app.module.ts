import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './modules/game-page/game-page.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent, 
    GamePageComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
