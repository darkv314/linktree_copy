import { Component } from '@angular/core';
import { ImageComponent } from '../icons/image/image.component';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './image-upload.component.html',
})
export class ImageUploadComponent {
  file: File | null = null;
  fileUrl: string | ArrayBuffer | null | undefined = null;
  over: boolean = false;
  isHovered = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.over = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.over = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.over = false;
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      console.log('a');
      this.handleFiles(droppedFiles[0]);
    }
  }

  handleFiles(file: File) {
    this.file = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.fileUrl = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
}
