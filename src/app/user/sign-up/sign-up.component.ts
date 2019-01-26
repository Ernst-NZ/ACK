import { Component, OnInit } from '@angular/core';
import { User } from '../../_shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../_shared/user.service';
import { ToastrService } from 'ngx-toastr'
import { NgxSpinnerService } from 'ngx-spinner';
 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 
  constructor(private userService: UserService, private toastr: ToastrService,
     private spinner: NgxSpinnerService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
 
  OnSubmit(form: NgForm) {   
    this.spinner.show(); 
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.spinner.hide();
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
          this.spinner.hide();
      });
  }
 
}