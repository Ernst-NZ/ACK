import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked
} from "@angular/core";
import { ILidmaat, IAddress, IWyke } from "../../_shared/interfaces";
import { LidmaatService } from "../../_shared/lidmaat.service";
import { SorterService } from "../../_core/sorter.service";
import { DataService } from "../../_core/data.service";
import { filter } from "rxjs/operators";
import { Globals } from "../../globals";
import { NgxSpinnerService } from "ngx-spinner";

export interface isActive {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-lidmate-lys",
  templateUrl: "./lidmate-lys.component.html"
})
export class LidmateLysComponent implements OnInit, AfterContentChecked {
  @Output() goGetActive = new EventEmitter();

  private _lidmate: ILidmaat[] = [];
  @Input() get lidmate(): ILidmaat[] {
    return this._lidmate;
  }

  private _addresse: IAddress[] = [];
  @Input() get adresse(): IAddress[] {
    return this._addresse;
  }
  status: isActive[] = [
    { value: "True", viewValue: "Aktief" },
    { value: "", viewValue: "Onaktief" },
    { value: "All", viewValue: "Almal" },
    { value: "Birthday", viewValue: "Verjaarsdae" }
  ];

  set lidmate(value: ILidmaat[]) {
    if (value) {
      this.filteredLidmate = this._lidmate = value;
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
  formData: ILidmaat;
  formAdd: IAddress;
  customersOrderTotal: number;
  wyke: Array<IWyke> = [];
  wykeFilter = false;
  tempFilter = false;

  constructor(
    private dataService: DataService,
    private sorterService: SorterService,
    private lidmaatService: LidmaatService,
    public globals: Globals,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.globals.filter = true;
    this.tempFilter = false;
    this.dataService.getWyke().subscribe((wyk: IWyke[]) => (this.wyke = wyk));
  }

  ngAfterContentChecked() {
    if (this.globals.myFilter && this.lidmate) {
      this.filter(this.globals.myFilter);
    }
  }

  getactive() {
    this.goGetActive.emit();
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredLidmate.forEach((cust: ILidmaat) => {});
  }

  filter(data: string) {
    this.globals.myFilter = data;
    if (data && this.wykeFilter) {
      this.filteredLidmate = this.lidmate.filter((cust: ILidmaat) => {
        return cust.WykID === +data;
      });
    } else {
      if (data) {
        this.filteredLidmate = this.lidmate.filter((cust: ILidmaat) => {
          return (
            cust.FirstName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            cust.LastName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            // cust.LastNotes.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            // cust.WykID.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
            cust.LidmaatId.toString().indexOf(data.toLowerCase()) > -1
          );
        });
      } else {
        this.filteredLidmate = this.lidmate;
      }
    }
    this.calculateOrders();
  }

  filterAdres(data: string) {
    if (data === "0") {
      return null;
    }
    if (data) {
      this.filteredAddresse = this.adresse.filter((add: IAddress) => {
        return add.Id.toString().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredAddresse = null;
    }
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.filteredLidmate, prop);
  }

  populateForm(lid: ILidmaat) {
    const tempId = this.wyke.filter(function(wyk) {
      return wyk.WykId === Number(lid.WykID);
    })[0];
    lid.WykID = +tempId.Kerkraad;
    this.lidmaatService.formData = Object.assign({}, lid);
    //  this.globals.filter = false;
    this.globals.lidmaatDetails = lid.FirstName + " " + lid.LastName;
    //   this.filter(lid.LidmaatId.toString());
    if (lid.AddressID) {
      this.filterAdres(lid.AddressID.toString());
      this.populateAddressForm(this.filteredAddresse[0]);
    } else {
      this.lidmaatService.formAdd = Object.assign({}, null);
      this.globals.lidmaatDetails =
        this.globals.lidmaatDetails + " - Geen Adres";
    }
    this.globals.lidmaatId = lid.LidmaatId;
  }

  populateAddressForm(adres: IAddress) {
    this.lidmaatService.formAdd = Object.assign({}, adres);
    this.globals.lidmaatDetails =
      this.globals.lidmaatDetails +
      " - Adres: " +
      adres.StreetNumber +
      " " +
      adres.StreetOne;
  }

  changeVisibility() {
    this.globals.filter = true;
    this.filter("");
  }

  getActive() {
    if (this.globals.LysFilter === "Wyke") {
      this.wykeFilter = true;
      this.globals.LysFilter = "True";
    } else {
      this.wykeFilter = false;
    }
    this.getactive();
    this.globals.filter = true;
    this.filter("");
  }
}
