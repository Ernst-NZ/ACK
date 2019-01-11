import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  selectedRoute: string;
  lidmaatId: Number;
  addressId: Number;
  lidmaatDetails: String;
  addressDetails: String;
//  dataSource: "https://data.ezy.kiwi"
  dataSource: "http://localhost:3000"

  

}
