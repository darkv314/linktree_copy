import { Component } from '@angular/core';
import { PreviewPhoneComponent } from './preview-phone/preview-phone.component';
import { PreviewLinksComponent } from './preview-links/preview-links.component';
import { PreviewProfileComponent } from './preview-profile/preview-profile.component';

@Component({
  selector: 'app-preview-section',
  standalone: true,
  imports: [
    PreviewPhoneComponent,
    PreviewLinksComponent,
    PreviewProfileComponent,
  ],
  templateUrl: './preview-section.component.html',
})
export class PreviewSectionComponent {}
