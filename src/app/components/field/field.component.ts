import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [],
  templateUrl: './field.component.html',
})
export class FieldComponent {
  fieldFormLabel = input.required<string>();
  fieldLabel = input.required<string>();
}
