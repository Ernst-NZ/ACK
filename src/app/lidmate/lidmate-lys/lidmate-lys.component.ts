import {Component, OnInit, Input, Output, EventEmitter }from '@angular/core'; 
import {ILidmaat, IAddress }from '../../_shared/interfaces'
import {LidmaatService }from '../../_shared/lidmaat.service'; 
import {SorterService }from '../../_core/sorter.service'; 
import {DataService }from '../../_core/data.service'; 
import {filter }from 'rxjs/operators'; 
import {Globals }from '../../globals'; 
import { NgxSpinnerService } from 'ngx-spinner';

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
    defaultDate = "1900-01-01T00:00:00"
    isVisible = true; 
   

    set lidmate(value:ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value; 
            this.globals.isSyncing = false;
        }
    }

   set adresse(value:IAddress[]) {
        if (value) {
            this.filteredAddresse = this._addresse = value; 
        }
    }

    filteredLidmate:any[] = []; 
    filteredAddresse:any[] = []; 
    formData:ILidmaat;
    formAdd:IAddress; 
    customersOrderTotal:number; 
    currencyCode:string = 'USD'; 
    
    
    constructor(private dataService:DataService, private sorterService:SorterService, private lidmaatService:LidmaatService, 
        private globals:Globals, private spinner: NgxSpinnerService) {}
    
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
        alert(data)
        if (data === "0") {
            return null;
        } if (data) {
            alert("nie nul nie");
            this.filteredAddresse = this.adresse.filter((add:IAddress) =>  {
                return add.Id.toString().indexOf(data.toLowerCase()) > -1; 
            }); 

            console.log("het Addres")
        } else {
            this.filteredAddresse = null; 
        }
        console.log("Geen Adres")
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
        if (lid.AddressID === 0) {
            this.lidmaatService.formAdd = Object.assign( {}, null);
            this.globals.lidmaatDetails = this.globals.lidmaatDetails + ' - Geen Adres'
        } else {
            this.populateAddressForm(this.filteredAddresse[0])
        }
        
        console.log(this.filteredAddresse)
      }

      populateAddressForm(adres:IAddress) {
            this.lidmaatService.formAdd = Object.assign( {}, adres);
            this.globals.lidmaatDetails = this.globals.lidmaatDetails + ' - Adres: ' + adres.StreetNumber + ' ' + adres.StreetOne
                  
      }
     
      changeVisibility() {
        this.isVisible =  ! this.isVisible; 
        this.filter("")
        }
      
        
}
 