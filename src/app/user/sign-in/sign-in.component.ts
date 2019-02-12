import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Globals } from '../../globals';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  userClaims: any;
  syncing: boolean = false; 
  constructor(private userService : UserService, private router : Router,
    public globals: Globals, private spinner: NgxSpinnerService) { }
 
  ngOnInit() {

  }
 
  OnSubmit(userName,password){
     /** spinner starts on init */
     this.syncing = true;
     this.spinner.show();
 
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{    

      localStorage.setItem('userToken',data.access_token);
      this.spinner.hide();
      this.syncing = false;  
      this.router.navigate(['/menu']);
      this.userService.setUser();      
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      this.syncing = false; 
      this.spinner.hide();
    });
  }
 
  
}