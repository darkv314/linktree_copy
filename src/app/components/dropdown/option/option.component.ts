import { Component, input } from '@angular/core';
import { DynamicIconComponent } from '../../icons/dynamic-icon/dynamic-icon.component';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [DynamicIconComponent],
  templateUrl: './option.component.html',
})
export class OptionComponent {
  icon = input.required<string>();
}
