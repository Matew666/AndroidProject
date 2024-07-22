import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  constructor() {}

  public async AddNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    return capturedPhoto;
  }

}
