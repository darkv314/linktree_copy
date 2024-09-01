import { Component, WritableSignal } from '@angular/core';
import { linkTabs } from '../../../../data/links';
import { Link, LinkService } from '../../services/link.service';
import { LinkTabComponent } from '../../../../components/link-tab/link-tab.component';

@Component({
  selector: 'app-preview-links',
  standalone: true,
  imports: [LinkTabComponent],
  templateUrl: './preview-links.component.html',
})
export class PreviewLinksComponent {
  fakeLinks = Array(4).fill(0) as [number, number];
  links: WritableSignal<Link[]>;
  linkTabs = linkTabs;
  constructor(private linkService: LinkService) {
    this.links = linkService.links;
  }
}
