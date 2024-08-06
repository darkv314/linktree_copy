import { Component } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    TabComponent,
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links = [
    {
      icon: 'link',
      name: 'Links',
      to: 'links',
    },
    {
      icon: 'profile-circle',
      name: 'Profile Details',
      to: 'profile-details',
    },
  ];
}
