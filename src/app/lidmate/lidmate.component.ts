import {Component, OnInit, Output, EventEmitter }from '@angular/core'; 
import {LidmaatService }from '../_shared/lidmaat.service'; 
import {ILidmaat, IAddress, IWiki  }from '../_shared/interfaces'; 
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
  wikiLys:any[]; 
  huise:any[]; 
  isVisible = true; 
  loading = true; 
  temp$ = Object; 
  lidmaatDetails:String; 
  tempAddress:IAddress = new Address();
  // today:Date = new Date();    
  // toSunday:number = 7 - this.today.getDay();
  // nextSunday:Date = new Date(this.today.setDate(this.today.getDate() + this.toSunday));
  // toBirthday:Date;
  // thisMonth:number = this.nextSunday.setDate(this.nextSunday.getMonth());
  // toMonth:number = this.toBirthday.setDate(this.toBirthday.getMonth());
  // thisDay:number = this.nextSunday.setDate(this.nextSunday.getDay());
  // toDay:number = this.toBirthday.setDate(this.toBirthday.getDay());
  // monthEnd:any; 
   
  constructor(private dataService:DataService, private router:Router, 
            public globals:Globals, private service:LidmaatService, 
            private spinner:NgxSpinnerService) {}
  
  ngOnInit() {
     this.spinner.show(); 
     this.globals.isSyncing = true; 
    
    this.loading = true; 
    this.title = 'My wiki'; 
    this.dataService.getActive(this.globals.activeOnly)
      .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 

      this.dataService.getWiki()
      .subscribe((wikis:IWiki[]) => this.wikiLys = wikis);   

      this.spinner.hide(); 
  }


  // setDates()  {    
  //   this.today= new Date();
  //   if (this.today.getDay() !== 7)  {
  //     this.nextSunday = this.today;
  //     console.log(this.nextSunday);

  //   } else {
  //     this.toSunday = 7 - this.today.getDay();
  //     this.nextSunday = new Date(this.today.setDate(this.today.getDate() + this.toSunday));
  //     console.log(this.nextSunday);
  //   }
  //   this.toBirthday = this.toBirthday =  new Date(this.toBirthday.setDate(this.nextSunday.getDate() + 7));
  //   this.thisMonth = this.nextSunday.getMonth();
  //   this.thisDay = this.nextSunday.getDate();
  //   this.toDay = this.toBirthday.getDate();
  //   console.log(this.thisDay);
  // }

  persoonlik() {
    this.isVisible =  ! this.isVisible; 
  }
  
getActive() {
  this.spinner.show(); 
  this.globals.isSyncing = true; 
 this.loading = true;
 if (this.globals.activeOnly === "All") {
   console.log("all");
   this.dataService.getWiki()
   .subscribe((wikies:IWiki[]) => this.wikiLys = wikies); 
  this.dataService.getLidmate()
  .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate); 
 } else {

  // if (this.globals.activeOnly === "Birthday") {
  //   this.dataService.getBirthday(this.globals.activeOnly,
  //      this.thisMonth, this.thisDay, this.toDay)
  //   .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate);  
  //  } 
   
  //  else {
  console.log("res")
  this.dataService.getActive(this.globals.activeOnly)
  .subscribe((lidmate:ILidmaat[]) => this.mense = lidmate);
  this.dataService.getWiki()
  .subscribe((wikies:IWiki[]) => this.wikiLys = wikies); 
   }
//  }
 
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
    this.service.formData = Object.assign( { IsActive:'true',}, null); 
  }
updateListx() {
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
updateList() {
  this.spinner.show(); 
  this.globals.isSyncing = true; 
  
  this.loading = true; 
  this.title = 'My Wikis'; 
  this.dataService.getWiki()
    .subscribe((wikis:IWiki[]) => this.wikiLys = wikis); 

  this.dataService.getAddress()
    .subscribe((addresse:IAddress[]) => this.huise = addresse); 
  this.spinner.hide(); 
  this.globals.filter = true; 
}
  
}