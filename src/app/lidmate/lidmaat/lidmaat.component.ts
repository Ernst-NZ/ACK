import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LidmaatService } from 'src/app/_shared/lidmaat.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ILidmaat } from 'src/app/_shared/interfaces';

export interface Geslag {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-lidmaat',
  templateUrl: './lidmaat.component.html',
  styleUrls: ['./lidmaat.component.scss']
})
export class LidmaatComponent implements OnInit {
  lidmaatXX: number;
  mense: any;
  gender: Geslag[] = [
    { value: 'Manlik', viewValue: 'Manlik'},
    { value: 'Vroulik', viewValue: 'Vroulik'},
  ];
  constructor(public service: LidmaatService,
    private toastr: ToastrService, private router : Router) { }

  ngOnInit() {
     this.resetForm();
  }

    resetForm(formLid?: NgForm) {
      if (formLid != null)
        formLid.resetForm();
      this.service.formData = {
        LidmaatId: null,
       FirstName: '',
       LastName: '',
       NickName: '',
       DOB: null,
       Gender: '',
       MobilePhone: '',
       Email: '',
       WeddingDate: null,
       IsActive: '',
       AddressID: null,
       Gemeente: '',
       PublicDates: ''
     }
   }
  onSubmit(formLid: NgForm) {
    if (formLid.value.LidmaatId == null)
      this.insertRecord(formLid);
    else
      this.updateRecord(formLid);      
  }

  insertRecord(formLid: NgForm) {
    formLid['Gemeente'].setValue("Tauranaga");
    this.service.postLidmaat(formLid.value).subscribe(res => {
      this.toastr.success('Suksesvol Bygevoeg', '');
     // this.resetForm(formLid);
      this.service.refreshList();
    });
  }

  updateRecord(formLid: NgForm) {
    this.service.putLidmaat(formLid.value).subscribe(res => {
      this.toastr.info('Suksesvol Verander', '');
   //   this.resetForm(formLid);
      // this.service.getLidmate()
       this.service.refreshList();    
      // window.location.reload();
      this.service.getLidmate()
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate); 
    });

  }

  testOnLidmaat() {
    alert("testOnLidmaat")
  }
  
}


