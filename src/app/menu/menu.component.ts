import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../_core/data.service';
import { IGroup } from '../_shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private service:DataService;
  tema:Array < IGroup >  = [];
  skrif:Array < IGroup >  = [];
  today:Date = new Date();
  weekEinde:Date = new Date(this.today.setDate(this.today.getDate() + 7)); 

  constructor(public globals: Globals, service:DataService,) {
    this.service = service; 
   }

  ngOnInit() {
    this.service.getGroups("Tema", this.weekEinde)
    .subscribe((Tema:IGroup[]) => this.tema = Tema);
  
    this.service.getGroups("Skriflesing", this.weekEinde)
    .subscribe((Skrif:IGroup[]) => this.skrif = Skrif);
  }

}
