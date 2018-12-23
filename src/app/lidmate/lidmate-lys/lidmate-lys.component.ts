import { Component, OnInit, Input } from '@angular/core';

import { ILidmaat } from '../../_shared/interfaces'
import { LidmaatService } from '../../_shared/lidmaat.service';
import { SorterService } from '../../_core/sorter.service';

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})
export class LidmateLysComponent implements OnInit {
    private _lidmate: ILidmaat[] = [];
    @Input() get lidmate(): ILidmaat[] {
        return this._lidmate;
    }
    
    set lidmate(value: ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value;
            this.calculateOrders();
        }
    }

    filteredLidmate: any[] = [];
    formData : ILidmaat;
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor(private sorterService: SorterService, private lidmaatService: LidmaatService) {}
    
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
                      cust.LastName.toLowerCase().indexOf(data.toLowerCase()) > -1;
                    //    cust.LastVisit.toDateString().indexOf(data.toLowerCase()) > -1; 
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
      }
}
 