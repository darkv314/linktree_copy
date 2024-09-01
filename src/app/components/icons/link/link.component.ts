import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.svg',
  host: {
    class: 'contents',
  },
})
export class LinkComponent {}
