import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ILidmaat, IAddress  } from '../_shared/interfaces';
import { DataService } from '../_core/data.service';
import { Address} from '../_shared/lidmaat.model';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})
export class LidmateComponent implements OnInit {
 
  title: string;
  mense: any[];
  huise: any[];
  isVisible = true;
  loading = true;
  temp$ = Object;
  lidmaatDetails: String;
  tempAddress: IAddress = new Address();
   
  constructor(private dataService: DataService,private router : Router,
            public globals: Globals, private service: LidmaatService, 
            private spinner: NgxSpinnerService) {}
  
  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();
     this.globals.isSyncing = true;    
    
    this.loading = true;
    this.title = 'Lidmate';
    this.dataService.getLidmate()
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate); 

      this.dataService.getAddress()
      .subscribe((addresse: IAddress[]) => this.huise = addresse); 
      this.spinner.hide();
     // this.globals.isSyncing = false;
  }

  persoonlik() {
    this.isVisible = !this.isVisible;
  }
  
  adres() {
    this.isVisible = !this.isVisible;
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
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate); 

    this.dataService.getAddress()
      .subscribe((addresse: IAddress[]) => this.huise = addresse); 
    this.spinner.hide();
    this.globals.filter = true;
}
  
}