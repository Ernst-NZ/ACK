import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../_shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-kontakons',
  templateUrl: './kontakons.component.html',
  styleUrls: ['./kontakons.component.scss']
})
export class KontakonsComponent implements OnInit {
  // composeEmail: {
  //   EmailType: string, EmailTo: string,
  //   EmailNaam: string, EmailFrom: string,
  //   Subject: string, Body: string
  // };

  composeEmail = {
      EmailType: 'navraag', EmailTo: 'ernst@hotmail.co.nz',
      EmailNaam: '', EmailFrom: '',
      Subject: '', Body: ''
    }

  constructor(public service: LidmaatService, private toastr: ToastrService,
    private spinner: NgxSpinnerService,private userService : UserService, 
    ) { }

  ngOnInit() {
    if (!localStorage.getItem("userToken") ) {
      this.userService.userAuthentication("ack","123").subscribe((data : any)=>{    
        console.log("set User")   
        localStorage.setItem('userToken',data.access_token);        
        this.userService.setUser();      
      },
      (err : HttpErrorResponse)=>{
        console.log(HttpErrorResponse)     
      });
    }
    this.userService.setUser(); 
  }
  sendEmail() {
    this.spinner.show();
    var Naam = "<h3><b><u>Web Navraag</u></b></h3><br><b><u>Naam</u></b>- ";
   if (this.composeEmail.EmailNaam !== '') {
      this.composeEmail.Body = Naam.concat(this.composeEmail.EmailNaam,
        '<br><b><u>Kontak details</u></b> -  ', this.composeEmail.EmailFrom,
        '<br><br><b><u>Boodskap</u></b> - ', this.composeEmail.Body)
    }
    this.composeEmail.EmailType = "Navraag";
    this.composeEmail.EmailFrom = 'navrae@acktauranga.nz';
    this.service.sendEmail(this.composeEmail).subscribe(res => {
      this.toastr.success('Email gestuur', '');
      this.spinner.hide();
      this.composeEmail.Body = "Email is gestuur."
    });
    
  };

}
