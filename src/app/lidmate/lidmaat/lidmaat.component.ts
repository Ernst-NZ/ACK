import {Component, OnInit }from '@angular/core'; 
import {NgForm }from '@angular/forms'; 
import {ToastrService }from 'ngx-toastr'; 
import {LidmaatService }from 'src/app/_shared/lidmaat.service'; 
import {Router }from '@angular/router'; 
import {ILidmaat }from 'src/app/_shared/interfaces'; 

export interface Geslag {
  value:string; 
  viewValue:string; 
}
@Component( {
  selector:'app-lidmaat', 
  templateUrl:'./lidmaat.component.html', 
  styleUrls:['./lidmaat.component.scss']
})
export class LidmaatComponent implements OnInit {
  mense:any;
   
  gender:Geslag[] = [ {value:'Manlik', viewValue:'Manlik'},  {value:'Vroulik', viewValue:'Vroulik'}, 
  ]; 
  constructor(public service:LidmaatService, 
    private toastr:ToastrService, private router:Router) {}

  ngOnInit() {
     this.resetForm(); 
  }

    resetForm(formLid?:NgForm) {
      if (formLid != null)
        formLid.resetForm(); 
      this.service.formData =  {
       LidmaatId:null, 
       FirstName:'', 
       LastName:'', 
       NickName:'', 
       DOB:null, 
       Gender:'', 
       MobilePhone:'', 
       Email:'', 
       WeddingDate:null, 
       IsActive:'', 
       AddressID:null, 
       Gemeente:'', 
       PublicDates:''
     }
   }
  onSubmit(formLid:NgForm) {   
    if (formLid.value.LidmaatId == null)
      this.insertRecord(formLid); 
    else
      this.updateRecord(formLid); 
  }

  insertRecord(formLid:NgForm) {
    formLid.controls['Gemeente'].setValue('Tauranga');
    if (formLid.value.IsActive === 'false') {
      formLid.controls['IsActive'].setValue('');
     } 
     if (formLid.value.PublicDates === 'false') {
      formLid.controls['PublicDates'].setValue('');
     } 
    this.service.postLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.success('Lidmaat Bygevoeg', ''); 
      this.service.refreshList(); 
    }); 
  }

  updateRecord(formLid:NgForm) {
     formLid.controls['Gemeente'].setValue('Tauranga');
     alert(formLid.value.IsActive)
    if (formLid.value.IsActive = 'false') {
      alert("1")
      formLid.controls['IsActive'].setValue('');
     } 
     if (formLid.value.PublicDates = 'false') {
      alert("2")
      formLid.controls['PublicDates'].setValue('');
     } 
    console.log(formLid);  
   
    this.service.putLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.info('Lidmaat Inligting Verander', ''); 
       this.service.refreshList(); 
      // window.location.reload();
       this.service.getLidmate()
       .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 
    }); 
  }

  updateLidmaat($event) { 
    this.service.formData.AddressID = $event.addressId; 
    this.service.putLidmaat(this.service.formData).subscribe(res =>  {
      this.toastr.info('Lidmaat Inligting Verander', ''); 
       this.service.refreshList(); 
      // window.location.reload();
      this.service.getLidmate()
      .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 
    }); 
  }

  // adresse

}


