import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../_core/data.service';
import { IGroup, Group } from '../_shared/interfaces';


@Component({
  selector: 'app-kerkraad',
  templateUrl: './kerkraad.component.html',
  styleUrls: ['./kerkraad.component.scss']
})
export class KerkraadComponent implements OnInit {
 

  constructor(public globals:Globals, private dataService:DataService) { }

  ngOnInit() {
       
  }

 
  }
