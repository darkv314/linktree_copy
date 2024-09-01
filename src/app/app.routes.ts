import { Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { AppComponent } from './app.component';
import { LinksComponent } from './pages/edit/links/links.component';
import { ProfileDetailsComponent } from './pages/edit/profile-details/profile-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'edit/links',
    pathMatch: 'full',
  },
  {
    path: 'edit',
    component: EditComponent,
    children: [
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'profile-details',
        component: ProfileDetailsComponent,
      },
    ],
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
];
