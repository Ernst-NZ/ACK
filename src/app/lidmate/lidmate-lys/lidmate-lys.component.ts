import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILidmaat } from '../../_shared/interfaces'
import { LidmaatService } from '../../_shared/lidmaat.service';
import { SorterService } from '../../_core/sorter.service';
import { filter } from 'rxjs/operators';
import { Globals } from '../../globals';

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})
export class LidmateLysComponent implements OnInit {    
    private _lidmate: ILidmaat[] = [];
    @Input() get lidmate(): ILidmaat[] {
        return this._lidmate;
    }
    isVisible = true;

    set lidmate(value: ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value;
            this.calculateOrders();
        }
    }

    // @Output() updateDetails = new EventEmitter();
    // getDetails(details){
    //     alert('first step')
    //   this.updateDetails.emit({ details: details })
    // }    

    filteredLidmate: any[] = [];
    formData : ILidmaat;
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    
    constructor(private sorterService: SorterService, private lidmaatService: LidmaatService,
        private globals: Globals ) {}
    
    ngOnInit() {

    }
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredLidmate.forEach((cust: ILidmaat) => {
            // this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredLidmate = this.lidmate.filter((cust: ILidmaat) => {
                return cust.FirstName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.LastName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    //   cust.LastVisit.toString().indexOf(data.toLowerCase()) > -1 ||
                       cust.LidmaatId.toString().indexOf(data.toLowerCase()) > -1; 
            });
            this.calculateOrders();
        } else {
            this.filteredLidmate = this.lidmate;
        }
        this.calculateOrders();
    }
    
    sort(prop: string) {
        // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredLidmate, prop);
    }

    populateForm(lid: ILidmaat) {
        this.lidmaatService.formData = Object.assign({}, lid);
        this.isVisible = !this.isVisible;
        this.filter(lid.LidmaatId.toString())
        this.globals.lidmaatId = lid.LidmaatId;
        this.globals.lidmaatDetails = lid.FirstName + ' ' + lid.LastName;
      }

      changeVisibility() {
        this.isVisible = !this.isVisible;
        this.filter("")
        }
      
        
}
 