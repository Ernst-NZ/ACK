import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ILidmaat } from '../_shared/interfaces';
import { DataService } from '../_core/data.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';


@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})
export class LidmateComponent implements OnInit {
  title: string;
  mense: any[];
  isVisible = true;
  loading = true;
  lidmaatDetails: String;
   
  constructor(private dataService: DataService,private router : Router,
            private globals: Globals) {}
  
  ngOnInit() {
    this.loading = true;
    this.title = 'Lidmate';
    this.dataService.getLidmate()
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate); 
    //  this.loading = false;
   // this.lidmaatDetails = this.globals.lidmaatDetails; 
    this.lidmaatDetails = this.globals.lidmaatDetails;    
  }

  persoonlik() {
    this.isVisible = !this.isVisible;
  }
  
  adres() {
    this.isVisible = !this.isVisible;
  } 

}

