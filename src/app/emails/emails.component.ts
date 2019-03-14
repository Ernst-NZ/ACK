import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../_shared/user.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  composeEmail = {
    EmailType: 'navraag', EmailTo: 'ernst@hotmail.co.nz',
    EmailNaam: '', EmailFrom: '',
    Subject: 'ACK Afkondigings', Body: '', Attachment: ''
  }
  public progress: number;
  public message: string;
  constructor(public service: LidmaatService, private toastr: ToastrService,
    private spinner: NgxSpinnerService,private userService : UserService, private http: HttpClient
    ) { }


  ngOnInit() {
    
  }

  sendEmail() {
    if (confirm("Is jy seker jy will die epos aan die hele gemeente stuur? Die stuur van die epos kan tot 5 minute neem.")) {
      this.spinner.show();   
      this.composeEmail.EmailType = "Batch";
      this.composeEmail.EmailFrom = 'navrae@acktauranga.nz';
      this.service.sendEmail(this.composeEmail).subscribe(res => {
        this.toastr.success('Email gestuur', '');
        this.spinner.hide();      
      });
    }    
  };

}
