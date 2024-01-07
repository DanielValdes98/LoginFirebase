import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

// uploadBytes: Permite de indicar donde es la referencia que vas a subir y cuál es el fichero que vas a subir

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images: string[];

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _storage: Storage
  ){ 
    this.images = [];
   }

  ngOnInit(): void {
    this.getImages();
  }

  onClick() {
    this._userService.logout()
      .then(() => {
        this._router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      })
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    // Reference to the image in the storage where we want to upload the file
    const imgRef = ref(this._storage, `images/${file.name}`); 
    
    // Upload the file to the storage
    uploadBytes(imgRef, file)
      .then(response => { 
        console.log(response);
        this.getImages(); // Update and show the images
      })
      .catch(error => console.log(error))
  } 

  getImages() {
    const imagesRef = ref(this._storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);

        this.images = []; // Reset the array
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          //console.log(url);
          this.images.push(url); // Add the url to the array images
        }
      })
      .catch(error => console.log(error))
  }

}
