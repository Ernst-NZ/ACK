import { Component, OnInit } from '@angular/core';
import { ILidmaat } from '../../_shared/interfaces'

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})
export class LidmateLysComponent implements OnInit {

  
    filteredLidmate: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor() {}
    
    ngOnInit() {
        this.filteredLidmate = [
            {LidmaatId:1, FirstName: 'John', LastName: 'Doe', NickName: 'John', Gemeente: 'Tauranga' },
            {LidmaatId:2, FirstName: 'Koos', LastName: 'Nel', NickName: 'Koos', Gemeente: 'Tauranga' },
            {LidmaatId:3, FirstName: 'Piet', LastName: 'Venter', NickName: 'Piet', Gemeente: 'Tauranga' },
            {LidmaatId:4, FirstName: 'Gert', LastName: 'DBothaoe', NickName: 'Gert', Gemeente: 'Tauranga' }
          ];

    }
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredLidmate.forEach((cust: ILidmaat) => {
            // this.customersOrderTotal += cust.orderTotal;
        });
    }
}