import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  selectedRoute: string;
  lidmaatId: Number;
  addressId: Number;
  lidmaatDetails: String = 'Voeg nuwe lidmaat by';
  addressDetails: String;
  dataSource: String =  'https://data.acktauranga.nz'
 // dataSource: String = "http://localhost:3000";
  userName: String;
  authenticate = false;
  adminUser = false;
  isSyncing = false;
  myFilter: string;
  filter: boolean;
  activeOnly = 'True';
}
