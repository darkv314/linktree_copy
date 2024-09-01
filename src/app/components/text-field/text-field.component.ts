import { Component, input, output } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { LinkComponent } from '../icons/link/link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [FieldComponent, LinkComponent, LinkComponent, CommonModule],
  templateUrl: './text-field.component.html',
  host: {
    class: 'w-full',
  },
})
export class TextFieldComponent {
  value = input.required<string>();
  valueChange = output<string>();
  textFormLabel = input.required<string>();
  textLabel = input.required<string>();
  errors = input.required<string>();
  variant = input<string>('primary');
  placeholder = input<string>('e.g. https://www.github.com/johnappleseed');
}
