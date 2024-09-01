import { Component, input } from '@angular/core';
import { DynamicIconComponent } from '../icons/dynamic-icon/dynamic-icon.component';
import { RightArrowComponent } from '../icons/right-arrow/right-arrow.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-link-tab',
  standalone: true,
  imports: [
    DynamicIconComponent,
    RightArrowComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './link-tab.component.html',
  host: {
    class: 'rounded-lg',
  },
})
export class LinkTabComponent {
  to = input.required<string>();
  bgColor = input<string>('bg-transparent');
  icon = input.required<string>();
}
