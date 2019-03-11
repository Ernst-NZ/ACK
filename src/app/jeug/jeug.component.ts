import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../_shared/user.service';

@Component({
  selector: 'app-jeug',
  templateUrl: './jeug.component.html',
  styleUrls: ['./jeug.component.scss']
})
export class JeugComponent implements OnInit {
  composeEmail = {
    EmailType: 'navraag', EmailTo: 'ernst@hotmail.co.nz',
    EmailNaam: '', EmailFrom: '',
    Subject: 'ACK Afkondigings', Body: ''
  }

  constructor(public service: LidmaatService, private toastr: ToastrService,
    private spinner: NgxSpinnerService,private userService : UserService, 
    ) { }

  ngOnInit() {
  }
  sendEmail() {
    this.spinner.show();   
    this.composeEmail.EmailType = "Batch";
    this.composeEmail.EmailFrom = 'navrae@acktauranga.nz';
    this.service.sendEmail(this.composeEmail).subscribe(res => {
      this.toastr.success('Email gestuur', '');
      this.spinner.hide();
      
    });
    
  };

}
