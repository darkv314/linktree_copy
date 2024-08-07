import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  host: {
    class:
      'relative min-h-dvh grid grid-rows-[auto_1fr] p-6 bg-gray-extra-light gap-6',
  },
})
export class AppComponent {
  title = 'linktree';
}
