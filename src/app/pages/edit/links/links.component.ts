import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { UserLinksComponent } from './user-links/user-links.component';
import {
  HeaderComponent,
  HeaderDirective,
} from '../../../components/heading/header.component';
import { ParagraphComponent } from '../../../components/paragraph/paragraph.component';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { emptyValidator, urlValidator } from '../../../helpers/validators';
import { FormApi, injectForm } from '@tanstack/angular-form';
import { Link, LinkService } from '../services/link.service';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    ButtonComponent,
    UserLinksComponent,
    HeaderComponent,
    ParagraphComponent,
    HeaderDirective,
  ],
  templateUrl: './links.component.html',
})
export class LinksComponent {
  linkForm: FormApi<
    {
      links: Array<Link>;
    },
    undefined
  >;
  constructor(private linkService: LinkService) {
    this.linkForm = injectForm({
      defaultValues: {
        links: this.linkService
          .links()
          .filter((link) => link.name !== '' || link.url !== ''),
      },
      onSubmit({ value }) {
        console.log('alo', value);
      },
    });
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.linkForm.handleSubmit();
  }
}
