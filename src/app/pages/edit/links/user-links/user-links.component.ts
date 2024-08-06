import { Component, input, WritableSignal } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { ParagraphComponent } from '../../../../components/paragraph/paragraph.component';
import { Link, LinkService } from '../../services/link.service';
import { FormApi, TanStackField } from '@tanstack/angular-form';
import { LinkFormComponent } from '../../../../components/link-form/link-form.component';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { emptyValidator, urlValidator } from '../../../../helpers/validators';
import { EmptyLinksComponent } from './empty-links/empty-links.component';

@Component({
  selector: 'app-user-links',
  standalone: true,
  imports: [
    ButtonComponent,
    ParagraphComponent,
    [TanStackField],
    LinkFormComponent,
    EmptyLinksComponent,
  ],
  templateUrl: './user-links.component.html',
  host: {
    class: 'h-full',
  },
})
export class UserLinksComponent {
  form = input.required<FormApi<{ links: Array<Link> }, undefined>>();
  zodValidator = zodValidator;
  urlValidator = urlValidator;
  emptyValidator = emptyValidator;

  constructor(private linkService: LinkService) {}

  createDefaultLink() {
    const newLink = {
      id: `${this.linkService.id()}`,
      name: '',
      url: '',
    };
    this.addLink(newLink);
    return newLink;
  }

  getLinkName = (idx: string) => `links[${Number(idx)}].name` as const;
  getLinkUrl = (idx: string) => `links[${Number(idx)}].url` as const;

  onDropdownValueChange(field: any, value: string, index: string) {
    field.api.handleChange(value);
    this.linkService.updateLinkName(index, value);
  }

  onTextValueChange(field: any, value: string, index: string) {
    field.api.handleChange(value);
    this.linkService.updateLinkUrl(index, value);
  }

  addLink(newLink: Link) {
    this.linkService.addLink(newLink);
  }

  removeLink(field: any, index: string) {
    field.api.removeValue(Number(index));
    this.linkService.deleteLink(index);
  }
}
