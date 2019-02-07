import {Injectable }from '@angular/core'; 
import {Lidmaat, Address }from './lidmaat.model'; 
import {HttpClient, HttpHeaders }from "@angular/common/http"; 
import {Observable }from 'rxjs/Observable'; 
import {catchError }from 'rxjs/operators'; 
import {ILidmaat, Group }from '../../app/_shared/interfaces'; 
import {IAddress }from '../../app/_shared/interfaces'; 
import {Globals }from '../globals'; 

@Injectable( {
  providedIn:'root'
})
export class LidmaatService {
formData:Lidmaat; 
formAdd:Address; 
list:Lidmaat[]; 
listAddress:Address[]; 
 readonly rootURL = this.globals.dataSource + "/api"
constructor(private http:HttpClient, private globals:Globals) {}

  postLidmaat(formData:Lidmaat) {
    return this.http.post(this.rootURL + '/Persoon', formData); 
   }

  refreshList() {
    this.globals.lidmaatDetails = '';
    this.http.get(this.rootURL + '/Persoon')
    .toPromise().then(res => this.list = res as Lidmaat[]); 
   }
  
  getLidmate():Observable < ILidmaat[] >  {
    this.globals.lidmaatDetails = '';
    return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
        .pipe(
            catchError(this.handleError)
        ); 
   }

  putLidmaat(formData:Lidmaat) {
//    var reqHeader = new HttpHeaders( {'No-Auth':'True', 'Access-Control-Allow-Origin':'*'})
    var reqHeader = new HttpHeaders( {'No-Auth':'True'})
    return this.http.post(this.rootURL + '/Persoon/' + formData.LidmaatId, 
    formData, {headers:reqHeader }); 
   }

  deleteLidmaat(id:number) {
    return this.http.delete(this.rootURL + '/Persoon/' + id); 
   }

  private handleError(error:any) {
   console.error('server error:', error); 
    if (error.error instanceof Error) {
       const errMessage = error.error.message; 
       return Observable.throw(errMessage); 
     }
    return Observable.throw(error || 'Node.js server error'); 
   }

   // Address
   postAddress(formAdd:Address) {
    return this.http.post(this.rootURL + '/Addresse', formAdd); 
   }

  refreshAddressList() {
    this.http.get(this.rootURL + '/Addresse')
    .toPromise().then(res => this.listAddress = res as Address[]); 
   }
  
  
  getAddress():Observable < IAddress[] >  {
    return this.http.get < IAddress[] > (this.rootURL + '/Addresse')
        .pipe(
            catchError(this.handleError)
        ); 
   }

  putAddress(formAdd:Address) {
    var reqHeader = new HttpHeaders( {'No-Auth':'True'})
    return this.http.post(this.rootURL + '/Addresse/' + formAdd.Id, formAdd,
     {headers:reqHeader } ); 
   }

  deleteAddress(id:number) {
    return this.http.delete(this.rootURL + '/Addresse/' + id); 
   }

   // Groepe
   postGroep(formAdd:Group) {
     console.log(formAdd)
    return this.http.post(this.rootURL + '/Group', formAdd); 
   }


   putGroep(formData:Group) {
    //    var reqHeader = new HttpHeaders( {'No-Auth':'True', 'Access-Control-Allow-Origin':'*'})
        var reqHeader = new HttpHeaders( {'No-Auth':'True'})
        return this.http.post(this.rootURL + '/Group/' + formData.Id, 
        formData, {headers:reqHeader }); 
       }
    
   deleteGroep(id:number) {
        return this.http.delete(this.rootURL + '/Group/' + id); 
      }
   
 }
