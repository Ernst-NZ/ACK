import { Component, OnInit } from '@angular/core';
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
            private globals: Globals, private service: LidmaatService, 
            private spinner: NgxSpinnerService) {}
  
  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();
 
     setTimeout(() => {
         /** spinner ends after 5 seconds */
         this.spinner.hide();
     }, 9000);


    this.loading = true;
    this.title = 'Lidmate';
    this.dataService.getLidmate()
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate); 

      this.dataService.getAddress()
      .subscribe((addresse: IAddress[]) => this.huise = addresse); 
  }

  persoonlik() {
    this.isVisible = !this.isVisible;
  }
  
  adres() {
    this.isVisible = !this.isVisible;
  } 

  // getAddress() {
  //   this.dataService.getAddress(4)
  //   .then(address => {
  //     this.tempAddress = address;
  //     if (address.length > 0) {
  //       console.log('###############################################################')
  //       this.tempAddress = address[0];
 
  //   })
  //     .catch(error => {
  //       console.error(error);
  //       alert(error.message);
  //     });
  //     return '';
  // }
  // getAddress() {
  //   this.dataService.getLidmate()
  //   .subscribe((lidmate: ILidmaat[]) => this.addresse = lidmate);  
  //   console.log(this.addresse)  
  //   }

}