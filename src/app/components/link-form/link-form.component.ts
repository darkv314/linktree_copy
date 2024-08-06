import { CommonModule } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { TanStackField, injectForm } from '@tanstack/angular-form';
import { DropdownModule } from 'primeng/dropdown';
import { OptionComponent } from '../dropdown/option/option.component';
import { linkOptions } from '../../data/links';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { LinkLineComponent } from '../icons/link-line/link-line.component';
import { ButtonComponent } from '../button/button.component';
import { TextFieldComponent } from '../text-field/text-field.component';

@Component({
  selector: 'app-link-form',
  standalone: true,
  imports: [
    TanStackField,
    DropdownModule,
    CommonModule,
    OptionComponent,
    DropdownComponent,
    LinkLineComponent,
    ButtonComponent,
    TextFieldComponent,
  ],
  templateUrl: './link-form.component.html',
})
export class LinkFormComponent {
  removeLink = output<string>();
  dropdownErrors = input.required<string>();
  dropdwonValue = input.required<string>();
  textErrors = input.required<string>();
  index = input.required<string>();
  indexNumber = computed(() => Number(this.index()));
  dropdownLabel = input.required<string>();
  textValue = input.required<string>();
  textLabel = input.required<string>();
  textValueChange = output<string>();
  dropdownValueChange = output<string>();
}
