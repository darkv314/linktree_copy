import { Component } from '@angular/core';
import { PreviewSectionComponent } from '../edit/preview-section/preview-section.component';
import { PreviewPhoneComponent } from '../edit/preview-section/preview-phone/preview-phone.component';
import { PreviewLinksComponent } from '../edit/preview-section/preview-links/preview-links.component';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    PreviewSectionComponent,
    PreviewPhoneComponent,
    PreviewLinksComponent,
  ],
  templateUrl: './preview.component.html',
})
export class PreviewComponent {}
