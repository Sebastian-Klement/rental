import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ImageService {
  constructor(private httpClient: HttpClient) {}

  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.httpClient.post<Response>('/api/v1/image-upload', formData);
  }
}
