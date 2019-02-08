import {Component, OnInit, Output, EventEmitter }from '@angular/core'; 
import {LidmaatService }from '../_shared/lidmaat.service'; 
import {ILidmaat, IAddress  }from '../_shared/interfaces'; 
import {DataService }from '../_core/data.service'; 
import {Address}from '../_shared/lidmaat.model'; 
import {Router }from '@angular/router'; 
import {Globals }from '../globals'; 
import {NgxSpinnerService }from 'ngx-spinner'; 

@Component( {
  selector:'app-lidmate', 
  templateUrl:'./lidmate.component.html', 
  styleUrls:['./lidmate.component.scss']
})

export class LidmateComponent implements OnInit {
  
  title:string; 
  mense:any[]; 
  huise:any[]; 
  isVisible = true; 
  loading = true; 
  temp$ = Object; 
  lidmaatDetails:String; 
  tempAddress:IAddress = new Address();
  today:Date = new Date();    
  toSunday:number = 7 - this.today.getDay();
  nextSunday:Date = new Date(this.today.setDate(this.today.getDate() + this.toSunday));
  toBirthday:Date = this.toBirthday =  new Date(this.nextSunday.setDate(this.nextSunday.getDate() + 7));
  thisMonth:number = this.nextSunday.setDate(this.nextSunday.getMonth());
  toMonth:number = this.toBirthday.setDate(this.toBirthday.getMonth());
  thisDay:number = this.nextSunday.setDate(this.nextSunday.getDay());
  toDay:number = this.toBirthday.setDate(this.toBirthday.getDay());
  monthEnd:any; 
   
  constructor(private dataService:DataService, private router:Router, 
            public globals:Globals, private service:LidmaatService, 
            private spinner:NgxSpinnerService) {}
  
  ngOnInit() {
     this.spinner.show(); 
     this.globals.isSyncing = true; 
    
    this.loading = true; 
    this.title = 'Lidmate'; 
    this.dataService.getActive(this.globals.activeOnly)
      .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 

      this.dataService.getAddress()
      .subscribe((addresse:IAddress[]) => this.huise = addresse); 
      this.setDates();
      this.spinner.hide(); 
  }


  setDates()  {
    var d = new Date();
    var n = d.getMonth();
    console.log(n);
    this.today= new Date();    
    this.toSunday = 7 - this.today.getDay();
    this.nextSunday = new Date(this.today.setDate(this.today.getDate() + this.toSunday));
    this.toBirthday = this.toBirthday =  new Date(this.nextSunday.setDate(this.nextSunday.getDate() + 7));
    this.thisMonth = this.nextSunday.getMonth();
    this.toMonth = this.toBirthday.getMonth();
    this.thisDay = this.nextSunday.getDate();
    this.toDay = this.toBirthday.getDate();
    console.log(this.thisMonth)
  }

  persoonlik() {
    this.isVisible =  ! this.isVisible; 
  }
  
getActive() {
  this.spinner.show(); 
  this.globals.isSyncing = true; 
 this.loading = true;
 if (this.globals.activeOnly === "All") {
   console.log("all")
  this.dataService.getLidmate()
  .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 
 } else {

  if (this.globals.activeOnly === "Birthday") {
    console.log("BDay")
    // if(this.thisDay < this.toDay) {
  
    // }
    this.dataService.getBirthday(this.globals.activeOnly,
       this.thisMonth, this.thisDay, this.toDay)
    .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate);
  
   } else {
  console.log("res")
  this.dataService.getActive(this.globals.activeOnly)
  .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate);
   }
 }
 
   this.dataService.getAddress()
   .subscribe((addresse:IAddress[]) => this.huise = addresse); 
   this.spinner.hide(); 
   this.globals.isSyncing = false;
}

  adres() {
    this.isVisible =  ! this.isVisible; 
  }
  skoonForm() {
    this.service.formAdd = Object.assign( {}, null); 
    this.service.formData = Object.assign( {}, null); 
  }
updateList() {
    this.spinner.show(); 
    this.globals.isSyncing = true; 
    
    this.loading = true; 
    this.title = 'Lidmate'; 
    this.dataService.getLidmate()
      .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 

    this.dataService.getAddress()
      .subscribe((addresse:IAddress[]) => this.huise = addresse); 
    this.spinner.hide(); 
    this.globals.filter = true; 
}
  
}