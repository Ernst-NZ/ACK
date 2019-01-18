import {Component, OnInit, Input, Output, EventEmitter }from '@angular/core'; 
import {ILidmaat, IAddress }from '../../_shared/interfaces'
import {LidmaatService }from '../../_shared/lidmaat.service'; 
import {SorterService }from '../../_core/sorter.service'; 
import {DataService }from '../../_core/data.service'; 
import {filter }from 'rxjs/operators'; 
import {Globals }from '../../globals'; 

@Component( {
    selector:'app-lidmate-lys', 
    templateUrl:'./lidmate-lys.component.html'
})
export class LidmateLysComponent implements OnInit {
    private _lidmate:ILidmaat[] = []; 
    @Input()get lidmate():ILidmaat[] {
        return this._lidmate; 
    }

    private _addresse:IAddress[] = []; 
    @Input()get adresse():IAddress[] {
        return this._addresse; 
    }


    isVisible = true; 
   

    set lidmate(value:ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value; 
            this.calculateOrders(); 
        }
    }

   set adresse(value:IAddress[]) {
        if (value) {
            this.filteredAddresse = this._addresse = value; 
        console.log(this.filteredAddresse)
        }
    }

    filteredLidmate:any[] = []; 
    filteredAddresse:any[] = []; 
    formData:ILidmaat;
    formAdd:IAddress; 
    customersOrderTotal:number; 
    currencyCode:string = 'USD'; 
    
    
    constructor(private dataService:DataService, private sorterService:SorterService, private lidmaatService:LidmaatService, 
        private globals:Globals) {}
    
    ngOnInit() {

    }
    
    calculateOrders() {
        this.customersOrderTotal = 0; 
        this.filteredLidmate.forEach((cust:ILidmaat) =>  {
            // this.customersOrderTotal += cust.orderTotal;
        }); 
    }

    filter(data:string) {
        if (data) {
            this.filteredLidmate = this.lidmate.filter((cust:ILidmaat) =>  {
                return cust.FirstName.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
                       cust.LastName.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
                    //   cust.LastVisit.toString().indexOf(data.toLowerCase()) > -1 ||
                       cust.LidmaatId.toString().indexOf(data.toLowerCase()) > -1; 
            }); 
            this.calculateOrders(); 
        }else {
            this.filteredLidmate = this.lidmate; 
        }
        this.calculateOrders(); 
    }

    filterAdres(data:string) {
        if (data) {
            this.filteredAddresse = this.adresse.filter((add:IAddress) =>  {
                return add.Id.toString().indexOf(data.toLowerCase()) > -1; 
            }); 
            console.log(this.filteredAddresse)
        }else {
            this.filteredAddresse = this.adresse; 
        }
        console.log(this.filteredAddresse)
    }
    
    sort(prop:string) {
        // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredLidmate, prop); 
    }

    populateForm(lid:ILidmaat) {
        this.lidmaatService.formData = Object.assign( {}, lid); 
        this.isVisible =  ! this.isVisible; 
        this.filter(lid.LidmaatId.toString())
        this.filterAdres(lid.AddressID.toString())
        this.globals.lidmaatId = lid.LidmaatId; 
        this.globals.lidmaatDetails = lid.FirstName + ' ' + lid.LastName; 
        console.log("Check ID: " + lid.AddressID)
        this.populateAddressForm(this.filteredAddresse[0])
        console.log(this.filteredAddresse)
      }

      populateAddressForm(adres:IAddress) {
        this.lidmaatService.formAdd = Object.assign( {}, adres); 
        console.log(adres);
      }
     
      changeVisibility() {
        this.isVisible =  ! this.isVisible; 
        this.filter("")
        }
      
        
}
 