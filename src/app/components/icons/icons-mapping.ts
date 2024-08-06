import { FacebookComponent } from './facebook/facebook.component';
import { GithubComponent } from './github/github.component';
import { LinkComponent } from './link/link.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { ProfileCircleComponent } from './profile-circle/profile-circle.component';
import { YoutubeComponent } from './youtube/youtube.component';

export const ICONS = new Map<string, any>([
  ['link', LinkComponent],
  ['profile-circle', ProfileCircleComponent],
  ['youtube', YoutubeComponent],
  ['github', GithubComponent],
  ['facebook', FacebookComponent],
  ['linkedin', LinkedinComponent],
]);
