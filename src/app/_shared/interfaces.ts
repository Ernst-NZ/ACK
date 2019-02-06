export interface ICustomer {
  id:number; 
  name:string; 
  city:string; 
  orderTotal?:number; 
  customerSince:any; 
}

export interface IOrder {
  customerId:number; 
  orderItems:IOrderItem[]; 
}

export interface IOrderItem {
  id:number; 
  productName:string; 
  itemCost:number; 
}

export interface ILidmaat {
  LidmaatId:Number
 FirstName:String
 LastName:String
 NickName?:String
 DOB?:Date
 Gender?:String
 MobilePhone?:String
 Email?:String
 WeddingDate?:Date
 IsActive?:String
 AddressID?:number
 Gemeente:String
 PublicDates?:String
 LastVisit?:Date
 LastNotes?:String
}

export interface IAddress {
  Id:Number
  StreetNumber?:String
  StreetOne?:String
  StreetTwo?:String
  Suburb?:String
  Town?:String
  PostCode?:String
  Phone?:String
}

export interface IGroup {
 PersoonId:Number
 Group1:String
 Name:String
 Date:Date
}

export class Group implements IGroup {
  PersoonId:Number
  Group1:String
  Name:String
  Date:Date
}