import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamePageComponent } from './modules/game-page/game-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'guess-this-word';
}
