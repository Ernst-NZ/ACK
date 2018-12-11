import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LidmaatService } from 'src/app/_shared/lidmaat.service';

@Component({
  selector: 'app-lidmaat',
  templateUrl: './lidmaat.component.html',
  styleUrls: ['./lidmaat.component.scss']
})
export class LidmaatComponent implements OnInit {

  constructor(private service: LidmaatService,
    private toastr: ToastrService) { }

  ngOnInit() {
     this.resetForm();
  }

   resetForm(form?: NgForm) {
     if (form != null)
       form.resetForm();
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
      Active: null,
      AddressID: null,
      Gemeente: '',
      PublicDates: ''
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postLidmaat(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'ACK');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putLidmaat(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Lidmaat Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}


