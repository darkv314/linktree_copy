import { CommonModule } from '@angular/common';
import {
  Component,
  contentChild,
  Directive,
  input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[headerDirective]',
  standalone: true,
})
export class HeaderDirective {}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  header = input<'h1' | 'h2' | 'h3'>('h1');
  center = input<boolean>(false);
  headerRef = contentChild.required(HeaderDirective, {
    read: TemplateRef,
  });
}
