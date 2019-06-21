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
  errors: any;
  private dataService: DataService;   
  gender:Geslag[] = [ {value:'Manlik', viewValue:'Manlik'},  {value:'Vroulik', viewValue:'Vroulik'}, 
  ]; 
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
  }

  resetForm(formWiki?:NgForm) {
    if (formWiki != null)
      formWiki.resetForm(); 
    this.service.formWiki =  {
     Id:0, 
     Subject:'', 
     Description:'', 
     Code:'', 
     Category:'',
   }
 }

    resetFormx(formLid?:NgForm) {
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
       PublicDates:'',
       WykID:'',
       LastNotes:''
     }
   }
  onSubmit(formWiki:NgForm) {
    this.spinner.show();   
    if (formWiki.value.Id == 0)
      this.insertRecord(formWiki);       
    else
      this.updateRecord(formWiki); 
  }

  // insertRecord(formWiki:NgForm) {
  //   this.spinner.show();
  //   this.wyke = null;
  //   this.service.postWyk(formWiki.value.
  //     subscribe(() => {
  //      // this.clearNewWyk();
  //       this.toastr.success('Inligting bygevoeg', '');
  //   //    this.refreshData();
  //     }));
  //   error => {
  //     this.errors = error
  //     alert(this.errors)
  //   }
  // }

  insertRecord(formWiki:NgForm) {
    console.log(formWiki.value);
    this.service.postWiki(formWiki.value).subscribe(res =>  {
      this.toastr.success('Wiki Added', ''); 
      this.service.refreshWikiList();
      this.updatelys();
      this.resetForm();
      this.spinner.hide(); 
    });     
  }

  updateRecord(formWiki:NgForm) {    
    this.service.putWiki(formWiki.value).subscribe(res =>  {
      this.toastr.info('Wiki Updated', ''); 
       this.service.refreshList(); 
       this.updatelys();
       this.resetForm();       
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

  onSubmitx(formLid:NgForm) {
    this.spinner.show();   
    if (formLid.value.LidmaatId == null)
      this.insertRecord(formLid);       
    else
      this.updateRecord(formLid); 
  }

  insertRecordx(formLid:NgForm) {
    formLid.controls['Gemeente'].setValue('Tauranga');
    // if (formLid.value.IsActive !== 'true') {
      formLid.controls['IsActive'].setValue('true');
    //  } 
     if (formLid.value.PublicDates !== 'true') {
      formLid.controls['PublicDates'].setValue('');
     }
     console.log("Naam from Form: " && formLid.value.WykID)
     var tempId = this.wyke.filter(function(wyk) {
      return wyk.Kerkraad === formLid.value.WykID;
  })[0]; 
     formLid.controls['WykID'].setValue(tempId.WykId);
     formLid.value.WykID
     console.log("ID to data : " && formLid.value.WykID)
    this.service.postLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.success('Lidmaat Bygevoeg', ''); 
      this.service.refreshList();
      this.updatelys();
      this.resetForm();
      this.spinner.hide(); 
    });     
  }

  updateRecordx(formLid:NgForm) {
     formLid.controls['Gemeente'].setValue('Tauranga');
    //  console.log(formLid.value.IsActive)
     if (formLid.value.IsActive !== true && formLid.value.IsActive !== "True") {
       formLid.controls['IsActive'].setValue('');
      } 
      if (formLid.value.PublicDates !== "True" && formLid.value.PublicDates !== true) {
       formLid.controls['PublicDates'].setValue('');
      } 
      if (formLid.value.WykID == "") {
        formLid.controls['WykID'].setValue('0');
       } 
       if (formLid.value.LastNotes == "") {
        formLid.controls['LastNotes'].setValue('');
       } 
    console.log("Naam from form: " + formLid.value.WykID);
    var tempId = this.wyke.filter(function(wyk) {
      return wyk.Kerkraad === formLid.value.WykID;
  })[0];   
  formLid.controls['WykID'].setValue(tempId.WykId);
  formLid.value.WykID
  console.log("ID to data: " && formLid.value.WykID);
   
    this.service.putLidmaat(formLid.value).subscribe(res =>  {
      this.toastr.info('Lidmaat Inligting Verander', ''); 
       this.service.refreshList(); 
       this.updatelys();
       this.resetForm();       
       this.spinner.hide();
    });    
  }

  updateLidmaatx($event) { 
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


