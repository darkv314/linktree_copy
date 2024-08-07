import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewSectionComponent } from './preview-section/preview-section.component';
import { LinkTabComponent } from '../../components/link-tab/link-tab.component';
import { PreviewProfileComponent } from './preview-section/preview-profile/preview-profile.component';
import { PreviewLinksComponent } from './preview-section/preview-links/preview-links.component';
import { PreviewPhoneComponent } from './preview-section/preview-phone/preview-phone.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    RouterOutlet,
    PreviewSectionComponent,
    LinkTabComponent,
    PreviewProfileComponent,
    PreviewLinksComponent,
    PreviewPhoneComponent,
  ],
  templateUrl: './edit.component.html',
  host: {
    class: 'min-h-full',
  },
})
export class EditComponent {}
