import { Component } from '@angular/core';
import {
  HeaderComponent,
  HeaderDirective,
} from '../../../../../components/heading/header.component';
import { ParagraphComponent } from '../../../../../components/paragraph/paragraph.component';
import { PhoneComponent } from '../phone/phone.component';

@Component({
  selector: 'app-empty-links',
  standalone: true,
  imports: [
    HeaderComponent,
    ParagraphComponent,
    PhoneComponent,
    HeaderDirective,
  ],
  templateUrl: './empty-links.component.html',
  host: {
    class: 'h-full',
  },
})
export class EmptyLinksComponent {}
