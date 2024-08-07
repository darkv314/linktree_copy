import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../../components/tab/tab.component';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    TabComponent,
    ButtonComponent,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  host: {
    class: 'relative w-full h-full',
  },
})
export class NavbarComponent implements OnInit {
  currentPath: string = '';
  private routerSubscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
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
