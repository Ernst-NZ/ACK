import {Component, OnInit }from '@angular/core'; 
import {DataService }from '../_core/data.service'; 
import {IGroup, Group }from '../_shared/interfaces'; 
import {map, catchError }from 'rxjs/operators'; 
import {Observable }from 'rxjs'; 
import {LidmaatService }from '../_shared/lidmaat.service'; 

export interface groepLys {
  value:string; 
  viewValue:string; 
}

@Component( {
  selector:'app-gasvryheid', 
  templateUrl:'./gasvryheid.component.html', 
  styleUrls:['./gasvryheid.component.scss']
})
export class GasvryheidComponent implements OnInit {

  
  private service:DataService; 
 

  constructor(service:DataService, private lidmaatService:LidmaatService ) {
    this.service = service; 
   }

  ngOnInit() {
  }

 
}

