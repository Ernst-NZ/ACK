import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakons',
  templateUrl: './kontakons.component.html',
  styleUrls: ['./kontakons.component.scss']
})
export class KontakonsComponent implements OnInit {
  composeEmail : any;

  constructor() { }

  ngOnInit() {
    this.composeEmail = {emailType: 'navraag', emailTo: 'ernst@hotmail.co.nz', naam: '', emailFrom: '', subject: '', body: '' }
  }
  sendEmail() {
    console.log(this.composeEmail)
};

}
