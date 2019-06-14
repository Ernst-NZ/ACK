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
 WykId?: Number
}

export class Address {
  Id:Number
  StreetNumber?:String
  StreetOne?:String
  StreetTwo?:String
  Suburb?:String
  Town?:String
  PostCode?:String
  Phone?:String
}

export class Group {
  Id:Number
  PersoonId:Number
  Group1:String
  Name:String
  Date:Date
}

export class Email {
  EmailType:String
  EmailNaam:String
  EmailTo:String
  EmailFrom:String
  Subject:String
  Body:Date
  Attachement: Object
}