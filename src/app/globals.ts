import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  selectedRoute: string;
  lidmaatId: Number;
  addressId: Number;
  lidmaatDetails: String = "Add new Wiki";
  addressDetails: String;
//  dataSource: String =  "https://data.acktauranga.nz"
  dataSource: String =  "https://data.ezy.kiwi"
//  dataSource: String = "http://localhost:3000";
  userName: String;
  authenticate: boolean = false;
  adminUser: boolean = false;
  isSyncing: boolean = false;
  myFilter: String;
  filter: boolean;
  activeOnly: string = "True";
}
