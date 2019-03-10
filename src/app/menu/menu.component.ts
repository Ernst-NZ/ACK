import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { DataService } from '../_core/data.service';
import { IGroup } from '../_shared/interfaces';
import { UserService } from '../_shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private userService : UserService, 
    public globals: Globals, service:DataService,) {
    this.service = service; 
   }

  ngOnInit() {

    if (!localStorage.getItem("userToken") ) {
      this.userService.userAuthentication("ack","123").subscribe((data : any)=>{    
        console.log("set User")   
        localStorage.setItem('userToken',data.access_token);        
        this.userService.setUser();      
      },
      (err : HttpErrorResponse)=>{
        console.log(HttpErrorResponse)     
      });
    }
    this.userService.setUser(); 
     this.service.getGroups("Tema", this.weekEinde)
     .subscribe((Tema:IGroup[]) => {
       if (Tema.length > 0) {
         console.log("this.tema = Tema");
         console.log(Tema)
        } 
      },
       error => {
         console.log('No data')
        });
  
    this.service.getGroups("Skriflesing", this.weekEinde)
    .subscribe((Skrif:IGroup[]) => this.skrif = Skrif);
  }

}
