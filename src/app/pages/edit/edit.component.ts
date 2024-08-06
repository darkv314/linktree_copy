import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewSectionComponent } from './preview-section/preview-section.component';
import { Link, LinkService } from './services/link.service';
import { LinkTabComponent } from '../../components/link-tab/link-tab.component';
import { linkTabs } from '../../data/links';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterOutlet, PreviewSectionComponent, LinkTabComponent],
  templateUrl: './edit.component.html',
  host: {
    class: 'min-h-full',
  },
})
export class EditComponent {
  links: WritableSignal<Link[]>;
  linkTabs = linkTabs;
  mappedLinks = signal<any[]>([]);
  constructor(private linkService: LinkService) {
    this.links = linkService.links;
  }
}
