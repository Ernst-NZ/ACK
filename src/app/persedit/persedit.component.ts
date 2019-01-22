import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_shared/user.service';
import { UploadImageService } from '../_shared/upload-image.service';


@Component({
  selector: 'app-persedit',
  templateUrl: './persedit.component.html',
  styleUrls: ['./persedit.component.scss'],
  providers:[UploadImageService]
})
export class PerseditComponent implements OnInit {
  userClaims: any;

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
 

  constructor(private router: Router, 
    private userService: UserService, 
    private imageService : UploadImageService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;


    });
    
  }

  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/menu']);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }

}