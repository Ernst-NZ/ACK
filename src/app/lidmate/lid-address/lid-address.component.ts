import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LidmaatService } from 'src/app/_shared/lidmaat.service';
import { IAddress } from 'src/app/_shared/interfaces';
import { ILidmaat } from 'src/app/_shared/interfaces';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LidmaatComponent } from '../lidmaat/lidmaat.component'
@Component({
  selector: 'app-lid-address',
  templateUrl: './lid-address.component.html',
  styleUrls: ['./lid-address.component.scss']
})
export class LidAddressComponent implements OnInit {
  @Output() updateAdres = new EventEmitter();
   updateLid(addressId){
     this.updateAdres.emit({ addressId: addressId })
   }
  addresse: any;
  constructor(public service: LidmaatService,  private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.resetForm();
 }

   resetForm(formAdd?: NgForm) {
     if (formAdd != null)
       formAdd.resetForm();
     this.service.formAdd = {
      Id: null,
      StreetNumber: '',
      StreetOne: '',
      StreetTwo: '',
      Suburb: null,
      Town: '',
      Phone: '',
          }
  }
 onSubmit(formAdd: NgForm) {
   if (formAdd.value.Id == null && formAdd.value.Id !== 0)
     this.insertRecord(formAdd);
   else
     this.updateRecord(formAdd);      
 }

 insertRecord(formAdd: NgForm) {
   this.service.postAddress(formAdd.value).subscribe(res => {
    this.toastr.success('Adres Gestoor', '');
    // this.resetForm(formLid);
     this.updateLid(res["Id"]);
     this.service.refreshList();
   });
 }

 updateRecord(formAdd: NgForm) {
   this.service.putAddress(formAdd.value).subscribe(res => {
     this.toastr.info('Adres Verander', '');
     this.updateLid(formAdd.value.Id);
     this.service.refreshList();    
     this.service.getAddress()
     .subscribe((addresse: IAddress[]) => this.addresse = addresse); 
   });
 }

}
