import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LidmaatService } from '../_shared/lidmaat.service';
import { DataService } from '../_core/data.service';
import { IGroup } from '../_shared/interfaces';
import { SorterService } from '../_core/sorter.service';

@Component({
  selector: 'app-eredienste',
  templateUrl: './eredienste.component.html',
  styleUrls: ['./eredienste.component.scss']
})
export class ErediensteComponent implements OnInit, AfterContentChecked {
  private service:DataService; 
  kerkraad:Array < IGroup >  = [];
  welkom:Array < IGroup >  = [];
  gasvry:Array < IGroup >  = [];
  jeug:Array < IGroup >  = [];
  tema:Array < IGroup >  = [];
  skrif:Array < IGroup >  = [];
  today:Date = new Date();
  maandEinde:Date = new Date(this.today.setDate(this.today.getDate() + 27));
  weekEinde:Date = new Date(this.today.setDate(this.today.getDate() + 7));
 

  constructor(service:DataService, private lidmaatService:LidmaatService,
    private spinner: NgxSpinnerService, private sorterService:SorterService,) {
      this.service = service; 
     }

  ngOnInit() {
  this.spinner.show();
 
  this.service.getGroups("Tema", this.weekEinde)
  .subscribe((Tema:IGroup[]) => this.tema = Tema);

  this.service.getGroups("Skriflesing", this.weekEinde)
  .subscribe((Skrif:IGroup[]) => this.skrif = Skrif);

  this.service.getGroups("Kerkraad", this.maandEinde)
  .subscribe((groep:IGroup[]) => this.kerkraad = groep);
  
  this.service.getGroups("Verwelkoming", this.maandEinde)
  .subscribe((Welkom:IGroup[]) => this.welkom = Welkom);

  this.service.getGroups("Gasvryheid", this.maandEinde)
  .subscribe((Gasvry:IGroup[]) => this.gasvry = Gasvry);

  this.service.getGroups("Jeug", this.maandEinde)
  .subscribe((Jeug:IGroup[]) => this.jeug = Jeug);
 
}

ngAfterContentChecked() { 
  if (this.kerkraad) {
    this.sorterService.sort(this.kerkraad, "Date"); 
  }
  if(this.kerkraad.length > 0) {
    if (this.kerkraad[0]['Date'] > this.kerkraad[(this.kerkraad.length)-1]['Date']) {
    this.sorterService.sort(this.kerkraad, "Date"); 
    }    
   }

  if (this.welkom) {
    this.sorterService.sort(this.welkom, "Date"); 
  }
  if(this.welkom.length > 0) {
    if (this.welkom[0]['Date'] > this.welkom[(this.welkom.length)-1]['Date']) {
    this.sorterService.sort(this.welkom, "Date"); 
    }    
   }

  if (this.gasvry) {
    this.sorterService.sort(this.gasvry, "Date"); 
  }
  if(this.gasvry.length > 0) {
    if (this.gasvry[0]['Date'] > this.gasvry[(this.gasvry.length)-1]['Date']) {
    this.sorterService.sort(this.gasvry, "Date"); 
    }    
   }

  if (this.jeug) {
    this.sorterService.sort(this.jeug, "Date"); 
    this.spinner.hide(); 
  }
  if(this.jeug.length > 0) {
    if (this.jeug[0]['Date'] > this.jeug[(this.jeug.length)-1]['Date']) {
    this.sorterService.sort(this.jeug, "Date"); 
    }    
   }
}

}
