import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  selectedRoute: string;
  lidmaatId: Number;
  addressId: Number;
  lidmaatDetails: String = "Voeg nuwe lidmaat by";
  addressDetails: String;
//  dataSource: "https://data.ezy.kiwi"
  dataSource: String = "http://localhost:3000";
  userName: String;
  authenticate: Boolean = false;
  adminUser: Boolean = false;
  isSyncing: boolean = false;
}
