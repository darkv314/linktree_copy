import { CommonModule } from '@angular/common';
import { Component, input, output, signal, SimpleChanges } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { linkOptions } from '../../data/links';
import { OptionComponent } from './option/option.component';
import { FieldComponent } from '../field/field.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    CommonModule,
    OptionComponent,
    FieldComponent,
  ],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  id = input.required<string>();
  errors = input.required<string>();
  options = linkOptions;
  dropdownFormLabel = input.required<string>();
  dropdownLabel = input.required<string>();
  valueChange = output<string>();
  value = input.required<string>();
  dropdownValue = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.dropdownValue = changes['value'].currentValue;
    }
  }

  onValueChange(event: { value: string }) {
    this.valueChange.emit(event.value);
  }
}
