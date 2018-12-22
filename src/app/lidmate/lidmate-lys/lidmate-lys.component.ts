import { Component, OnInit, Input } from '@angular/core';
import { ILidmaat } from '../../_shared/interfaces'

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})
export class LidmateLysComponent implements OnInit {
    private _lidmate: ILidmaat[] = [];
    @Input() get lidmate(): ILidmaat[] {
        return this._lidmate;
    }
    
    set customers(value: ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value;
            this.calculateOrders();
        }
    }

    filteredLidmate: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor() {}
    
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
            this.filteredLidmate = this.customers.filter((cust: ILidmaat) => {
                return cust.FirstName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.LastName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.LastVisit.toDateString().indexOf(data)> -1;
            });
            this.calculateOrders();
        } else {
            this.filteredLidmate = this.customers;
        }
    }
    
    sort(prop: string) {
        // A sorter service will handle the sorting
    }
}
 