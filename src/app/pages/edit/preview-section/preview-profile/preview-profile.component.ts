import { Component, input, WritableSignal } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preview-profile',
  standalone: true,
  imports: [],
  templateUrl: './preview-profile.component.html',
})
export class PreviewProfileComponent {
  imgSrc: WritableSignal<string>;
  firstName: WritableSignal<string>;
  lastName: WritableSignal<string>;
  email: WritableSignal<string>;
  constructor(private profileService: ProfileService) {
    this.imgSrc = profileService.profile.imgSrc;
    this.firstName = profileService.profile.firstName;
    this.lastName = profileService.profile.lastName;
    this.email = profileService.profile.email;
  }
}
