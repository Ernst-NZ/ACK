import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_shared/user.service';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-persedit',
  templateUrl: './persedit.component.html',
  styleUrls: ['./persedit.component.scss']
})
export class PerseditComponent implements OnInit {
  userClaims: any;
  // 'use strict';
  // //  nodemailer = require('nodemailer');

  constructor(private router: Router, private userService: UserService,
    private globals: Globals, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
      this.globals.userName = "Welkom" && this.userClaims.FirstName;
      alert(this.globals.userName)
      if (localStorage.getItem('userToken')) {
        this.globals.authenticate = true;  
      } else {
        this.globals.authenticate =false;
      }
      alert(this.globals.authenticate)


    });

    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 9000);
    
  }

  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/menu']);
    this.globals.userName = '';
  }

  emailTest() {

    // const sendmail = require('sendmail')();

// sendmail({
//     from: 'no-reply@yourdomain.com',
//     to: 'test@qq.com, test@sohu.com, test@163.com ',
//     subject: 'test sendmail',
//     html: 'Mail of test sendmail ',
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });

    // 'use strict';
  // var nodemailer = require('nodemailer');
  // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: account.user, // generated ethereal user
//             pass: account.pass // generated ethereal password
//         }
//     });

    // setup email data with unicode symbols
    // let mailOptions = {
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: 'bar@example.com, baz@example.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>' // html body
    // };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     // Preview only available when sending through an Ethereal account
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // });
// });

  }


}