import { Component } from '@angular/core';
import {
  HeaderComponent,
  HeaderDirective,
} from '../../../components/heading/header.component';
import { ParagraphComponent } from '../../../components/paragraph/paragraph.component';
import { ImageUploadComponent } from '../../../components/image-upload/image-upload.component';
import { emailValidator, emptyValidator } from '../../../helpers/validators';
import { TextFieldComponent } from '../../../components/text-field/text-field.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { FormApi, injectForm, TanStackField } from '@tanstack/angular-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderDirective,
    ParagraphComponent,
    ImageUploadComponent,
    TextFieldComponent,
    ButtonComponent,
    TanStackField,
  ],
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent {
  constructor(private profileService: ProfileService) {
    this.profileForm = injectForm({
      defaultValues: {
        firstName: this.profileService.profile.firstName(),
        lastName: this.profileService.profile.lastName(),
        email: this.profileService.profile.email(),
      },
      onSubmit({ value }) {
        console.log('alo', value);
      },
    });
  }

  profileForm: FormApi<
    {
      firstName: string;
      lastName: string;
      email: string;
    },
    undefined
  >;

  zodValidator = zodValidator;
  emptyValidator = emptyValidator;
  emailValidator = emailValidator;
  testValue = '';
  inputs: {
    name: 'firstName' | 'lastName' | 'email';
    label: string;
    placeholder: string;
    validator: any;
  }[] = [
    {
      name: 'firstName',
      label: 'First Name*',
      placeholder: 'e.g. John',
      validator: emptyValidator,
    },
    {
      name: 'lastName',
      label: 'Last Name*',
      placeholder: 'e.g. Doe',
      validator: emptyValidator,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'e.g. email@example.com',
      validator: emailValidator,
    },
  ];

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.profileForm.handleSubmit();
  }

  onValueChange(field: any, value: string) {
    field.api.handleChange(value);
    this.profileService.updateValue(field.api.name, value);
  }
}
