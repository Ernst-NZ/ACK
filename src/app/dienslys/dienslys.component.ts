import { Component, OnInit } from '@angular/core';
import {DataService }from '../_core/data.service'; 
import {IGroup, Group }from '../_shared/interfaces'; 
import {map, catchError }from 'rxjs/operators'; 
import {Observable }from 'rxjs'; 
import {LidmaatService }from '../_shared/lidmaat.service'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SorterService } from '../_core/sorter.service';

export interface groepLys {
  value:string; 
  viewValue:string; 
}

@Component({
  selector: 'app-dienslys',
  templateUrl: './dienslys.component.html',
  styleUrls: ['./dienslys.component.scss']
})
export class DienslysComponent implements OnInit {


  private service:DataService; 
  groepe:Array < IGroup >  = []; 
  newGroep:IGroup = new Group(); 
//  oldGroep: IGroup = new Group();
  oldGroep:any; 
  errors:any; 
  Group1:groepLys[] = [ {value:'Kerkraad', viewValue:'Kerkraad'},
                        {value:'Verwelkoming', viewValue:'Verwelkoming'},  
                        {value:'Gasvryheid', viewValue:'Gasvryheid'},  
                        {value:'Jeug', viewValue:'Jeug bediening'},
                        {value:'Tema', viewValue:'Sondag Tema'},
                        {value:'Skriflesing', viewValue:'Skriflesing'}, 
]; 

  constructor(service:DataService, private lidmaatService:LidmaatService,
    private spinner: NgxSpinnerService, private sorterService:SorterService,
    private toastr:ToastrService ) {
    this.service = service; 
   }

  ngOnInit() {
    this.spinner.show(); 
    this.service.getGroepe()
    .subscribe((groep:IGroup[]) => this.groepe = groep);     
  }

  ngAfterContentChecked() {
    if (this.groepe) {
      this.spinner.hide(); 
    }
  }

  refreshData() {
    this.service.getGroepe()
    .subscribe((groep:IGroup[]) => {
      if(groep) {
        this.groepe = groep;
   //     this.spinner.hide();
      };      
    });      
  }

  getGroep(groepId) {
    this.spinner.show(); 
    this.service.getGroep(groepId).
      subscribe((groepe:IGroup[]) =>  {
        if (groepe) {
          this.oldGroep = groepe; 
          console.log(this.oldGroep);
          this.spinner.hide();  
        }
        error =>  {
          this.errors = error
        }
      }); 
  }

  addGroep() {
    this.spinner.show(); 
    this.groepe = null; 
    this.lidmaatService.postGroep(this.newGroep).
    subscribe(res =>  {
      this.clearNewGroep();
      this.toastr.success('Inligting bygevoeg', ''); 
      this.refreshData();
    });     
    error =>  {
      this.errors = error
      alert(this.errors)
    }
  }

  updateGroep() {
    this.spinner.show(); 
    this.groepe = null; 
    this.lidmaatService.putGroep(this.oldGroep).
      subscribe(res =>  {
        this.clearOldGroep();
        this.toastr.info('Inligting Verander', ''); 
        this.refreshData(); 
      });      
      error =>  {
        this.errors = error
        alert(this.errors)
      }
  }

  deleteGroep(groepId) {
    this.spinner.show(); 
    this.groepe = null; 
    this.lidmaatService.deleteGroep(groepId).
    subscribe(res =>  { 
      this.toastr.warning('Rekord verwyder', ''); 
      this.refreshData(); 
    });    
    error =>  {
      this.errors = error
      alert(this.errors)
        }
  }
       

  clearNewGroep() {    
    this.newGroep = new Group(); 
  }

  clearOldGroep() {
    this.oldGroep = new Group(); 
  }

  sort(prop:string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.groepe, prop); 
}
 
}

