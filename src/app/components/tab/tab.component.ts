import { Component, Directive, input } from '@angular/core';
import { DynamicIconComponent } from '../icons/dynamic-icon/dynamic-icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Directive({
  selector: 'tab-icon',
  standalone: true,
})
export class TabIconDirective {}

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [DynamicIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './tab.component.html',
})
export class TabComponent {
  icon = input.required<string>();
  name = input.required<string>();
  to = input.required<string>();
}
