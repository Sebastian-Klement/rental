import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './image-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './image.service';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ImageService],
  exports: [ImageUploadComponent],
})
export class ImageUploadModule {}
