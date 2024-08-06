import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph.component.html',
})
export class ParagraphComponent {
  center = input<boolean>(false);
  restricted = input<boolean>(false);
}
