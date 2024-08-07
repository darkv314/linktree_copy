import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
})
export class FieldComponent {
  fieldFormLabel = input.required<string>();
  fieldLabel = input.required<string>();
  variant = input<string>('primary');
}
