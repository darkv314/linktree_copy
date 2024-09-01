import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<'button' | 'submit'>('button');
  name = input.required<string>();
  full = input<boolean>(false);
  buttonClick = output<void>();
  variant = input<'primary' | 'secondary'>('primary');
}
