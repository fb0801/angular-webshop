import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <app-header></app-header>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'store';
}
