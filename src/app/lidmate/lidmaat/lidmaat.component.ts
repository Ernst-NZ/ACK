import {Component, OnInit, Output, EventEmitter }from '@angular/core'; 
import {NgForm }from '@angular/forms'; 
import {ToastrService }from 'ngx-toastr'; 
import {LidmaatService }from 'src/app/_shared/lidmaat.service'; 
import {Router }from '@angular/router'; 
import {ILidmaat, IWyke }from 'src/app/_shared/interfaces';
import { NgxSpinnerService } from 'ngx-spinner';
import { Globals } from 'src/app/globals';
import { isNull } from 'util';
import { DataService } from 'src/app/_core/data.service';



export interface Geslag {
  value:string; 
  viewValue:string; 
}
export interface Wyke {
  value:number; 
  viewValue:string; 
}

@Component( {
  selector:'app-lidmaat', 
  templateUrl:'./lidmaat.component.html', 
  styleUrls:['./lidmaat.component.scss']
})
export class LidmaatComponent implements OnInit {  
  @Output() updateLys = new EventEmitter();
  updatelys(){
    this.updateLys.emit();
  }
  mense:any;
  private dataService: DataService;   
  gender:Geslag[] = [ {value:'Manlik', viewValue:'Manlik'},  {value:'Vroulik', viewValue:'Vroulik'}, 
  ]; 
 // wyke: Wyke[];
  wyke: Array<IWyke> = [];
  constructor(public service:LidmaatService, 
    dataService: DataService, 
    private toastr:ToastrService, private router:Router,
    public globals: Globals,
    private spinner: NgxSpinnerService) {
      this.dataService = dataService;}

  ngOnInit() {
     this.resetForm();
     this.dataService.getWyke()
      .subscribe((wyk: IWyke[]) => this.wyke = wyk);

    //  this.wyke = [{value:1, viewValue:'Dough'}, {value:2, viewValue:'Ernst'}, {value:3, viewValue:'Hannes'}, {value:4, viewValue:'Hendrik'}, {value:5, viewValue:'Kitty'}, {value:6, viewValue:'MJ'}, {value:7, viewValue:'Poppie'},] 
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
       IsActive:'true',  
       AddressID:null, 
       Gemeente:'', 
       PublicDates:''
     }
   }
  onSubmit(formLid:NgForm) {
    this.spinner.show();   
    if (formLid.value.LidmaatId == null)
      this.insertRecord(formLid);       
    else
      this.updateRecord(formLid); 
  }

  insertRecord(formLid:NgForm) {
    formLid.controls['Gemeente'].setValue('Tauranga');
    // if (formLid.value.IsActive !== 'true') {
      formLid.controls['IsActive'].setValue('true');
    //  } 
     if (formLid.value.PublicDates !== 'true') {
      formLid.controls['PublicDates'].setValue('');
     } 
    this.service.postLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.success('Lidmaat Bygevoeg', ''); 
      this.service.refreshList();
      this.updatelys();
      this.spinner.hide(); 
    }); 
    
  }

  updateRecord(formLid:NgForm) {
     formLid.controls['Gemeente'].setValue('Tauranga');
     console.log(formLid.value.IsActive)
     if (formLid.value.IsActive !== true) {
       formLid.controls['IsActive'].setValue('');
      } 
      if (formLid.value.PublicDates !== true) {
       formLid.controls['PublicDates'].setValue('');
      } 
    console.log(formLid);  
   
    this.service.putLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.info('Lidmaat Inligting Verander', ''); 
       this.service.refreshList(); 
       this.updatelys();
       this.spinner.hide();
    }); 
   
  }

  updateLidmaat($event) { 
    this.service.formData.AddressID = $event.addressId; 
    this.service.putLidmaat(this.service.formData).subscribe(res =>  {
      this.toastr.info('Lidmaat Inligting Verander', ''); 
       this.service.refreshList(); 
      // window.location.reload();
      this.updatelys();
      // this.service.getLidmate()
      // .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 
    }); 
  }

}


