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
            {LidmaatId:1, FirstName: 'John', LastName: 'Doe', NickName: 'John', Gemeente: 'Tauranga', LastVisit: '01 Jan 2018' },
            {LidmaatId:2, FirstName: 'Koos', LastName: 'Nel', NickName: 'Koos', Gemeente: 'Tauranga' , LastVisit: '02 Feb 2018' },
            {LidmaatId:3, FirstName: 'Piet', LastName: 'Venter', NickName: 'Piet', Gemeente: 'Tauranga' , LastVisit: '03 Mar 2018' },
            {LidmaatId:4, FirstName: 'Gert', LastName: 'Botha', NickName: 'Gert', Gemeente: 'Tauranga' , LastVisit: '04 Apr 2018' }
          ];

    }
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredLidmate.forEach((cust: ILidmaat) => {
            // this.customersOrderTotal += cust.orderTotal;
        });
    }
}