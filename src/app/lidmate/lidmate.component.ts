import { Component, OnInit } from '@angular/core';
import { LidmaatService } from '../_shared/lidmaat.service';
import { ILidmaat } from '../_shared/interfaces';
import { DataService } from '../_core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lidmate',
  templateUrl: './lidmate.component.html',
  styleUrls: ['./lidmate.component.scss']
})
export class LidmateComponent implements OnInit {
  title: string;
  mense: any[];
  
  constructor(private dataService: DataService,private router : Router) {}
  
  ngOnInit() {
      this.title = 'Lidmate';
      this.dataService.getLidmate()
      .subscribe((lidmate: ILidmaat[]) => this.mense = lidmate);     
  }
}

