import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILidmaat, IAddress, IWyke, IWiki } from '../../_shared/interfaces'
import { LidmaatService } from '../../_shared/lidmaat.service';
import { SorterService } from '../../_core/sorter.service';
import { DataService } from '../../_core/data.service';
import { filter } from 'rxjs/operators';
import { Globals } from '../../globals';
import { NgxSpinnerService } from 'ngx-spinner';

export interface isActive {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-lidmate-lys',
    templateUrl: './lidmate-lys.component.html'
})


export class LidmateLysComponent implements OnInit {
    @Output() goGetActive = new EventEmitter();
    getactive() {
        this.goGetActive.emit();
    }

    private _lidmate: ILidmaat[] = [];
    @Input() get lidmate(): ILidmaat[] {
        return this._lidmate;
    }

    private _wikiLys: IWiki[] = [];
    @Input() get wikiLys(): IWiki[] {
        return this._wikiLys;
    }

    private _addresse: IAddress[] = [];
    @Input() get adresse(): IAddress[] {
        return this._addresse;
    }
    status: isActive[] = [{ value: 'True', viewValue: 'Aktief' },
    { value: '', viewValue: 'Onaktief' },
    { value: 'All', viewValue: 'Almal' },
    { value: 'Birthday', viewValue: 'Verjaarsdae' },
    ];

    set lidmate(value: ILidmaat[]) {
        if (value) {
            this.filteredLidmate = this._lidmate = value;
            this.globals.isSyncing = false;
        }
    }

    set wikiLys(value: IWiki[]) {
        if (value) {
            this.filteredWiki = this._wikiLys = value;
            this.globals.isSyncing = false;
        }
    }

    set adresse(value: IAddress[]) {
        if (value) {
            this.filteredAddresse = this._addresse = value;
        }
    }

    filteredLidmate: any[] = [];
    filteredAddresse: any[] = [];
    filteredWiki: any[] = [];
    formData: ILidmaat;
    formAdd: IAddress;
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    wyke: Array<IWyke> = [];
    wykeFilter = false;

    constructor(private dataService: DataService, private sorterService: SorterService, private lidmaatService: LidmaatService,
        public globals: Globals, private spinner: NgxSpinnerService) { }

    ngOnInit() {
        this.globals.filter = true;
        this.dataService.getWyke()
            .subscribe((wyk: IWyke[]) => this.wyke = wyk);
    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredLidmate.forEach((cust: ILidmaat) => {
            // this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter(data: string) {
        this.globals.myFilter = data;
       if (data) {
                this.filteredWiki = this.wikiLys.filter((wiki: IWiki) => {
                    return wiki.Subject.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        wiki.Description.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                        wiki.Code.toLowerCase().indexOf(data.toLowerCase()) > -1;
                });
            }
            else { 
                this.filteredWiki = this.wikiLys;
            }    
        this.calculateOrders();
    }

    filterAdres(data: string) {
        if (data === "0") {
            console.log("Geen Adres")
            return null;

        } if (data) {
            this.filteredAddresse = this.adresse.filter((add: IAddress) => {
                return add.Id.toString().indexOf(data.toLowerCase()) > -1;
            });
        } else {
            this.filteredAddresse = null;
        }

    }

    sort(prop: string) {
        // A sorter service will handle the sorting
        this.sorterService.sort(this.filteredWiki, prop);
    }

    populateForm(wiki: IWiki) {
        this.lidmaatService.formWiki = Object.assign({}, wiki);
        this.globals.lidmaatDetails = wiki.Subject;
    }
    populateFormx(lid: ILidmaat) {
        console.log(this.wyke);
        var tempId = this.wyke.filter(function (wyk) {
            return wyk.WykId === Number(lid.WykID);
        })[0];
        console.log(lid.WykID)
        console.log(tempId);
        lid.WykID = tempId.Kerkraad;
        console.log(lid.WykID)
        this.lidmaatService.formData = Object.assign({}, lid);
        this.globals.filter = false;
        this.globals.lidmaatDetails = lid.FirstName + ' ' + lid.LastName;
        this.filter(lid.LidmaatId.toString());
        if (lid.AddressID) {
            this.filterAdres(lid.AddressID.toString());
            this.populateAddressForm(this.filteredAddresse[0])
        } else {
            this.lidmaatService.formAdd = Object.assign({}, null);
            this.globals.lidmaatDetails = this.globals.lidmaatDetails + ' - Geen Adres'
        }
        this.globals.lidmaatId = lid.LidmaatId;
    }

    populateAddressForm(adres: IAddress) {
        this.lidmaatService.formAdd = Object.assign({}, adres);
        this.globals.lidmaatDetails = this.globals.lidmaatDetails + ' - Adres: ' + adres.StreetNumber + ' ' + adres.StreetOne

    }

    changeVisibility() {
        this.globals.filter = true;
        this.filter("");
    }

    getActive() {
        if (this.globals.activeOnly === "Wyke") {
            this.wykeFilter = true;
            this.globals.activeOnly = "True";
        } else {
            this.wykeFilter = false;
        }
        this.getactive();
        this.globals.filter = true;
        this.filter("");
    }

}
