export class Lidmaat {
  LidmaatId : Number
 FirstName : String
 LastName : String
 NickName? : String
 DOB? : Date
 Gender?  : String
 MobilePhone?  : String
 Email?  : String
 WeddingDate? : Date
 IsActive? : String
 AddressID? : number
 Gemeente  : String
 PublicDates?  : String
 LastVisit?: Date
 LastNotes?: String
}

export class Address {
  Id:String
  StreetNumber?:String
  StreetOne?:String
  StreetTwo?:String
  Suburb?:String
  Town?:String
  PostCode?:String
  Phone?:String
}