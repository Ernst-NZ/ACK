import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  selectedRoute: string;
  lidmaatId: Number;
  addressId: Number;
  lidmaatDetails: String = "Voeg nuwe lidmaat by";
  addressDetails: String;
//  dataSource: String =  "https://data.ezy.kiwi"
  dataSource: String = "http://localhost:3000";
  userName: String;
  authenticate: boolean = false;
  adminUser: boolean = false;
  isSyncing: boolean = false;
}
