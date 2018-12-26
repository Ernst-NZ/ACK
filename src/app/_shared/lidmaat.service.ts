import { Injectable } from '@angular/core';
import { Lidmaat } from './lidmaat.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LidmaatService {
formData : Lidmaat;
list : Lidmaat[];
 readonly rootURL ="http://localhost:3000/api"
// readonly rootURL ="https://data.ezy.kiwi/api"
  constructor(private http : HttpClient) { }

  postLidmaat(formData : Lidmaat){
    return this.http.post(this.rootURL+'/Persoon',formData);
   }

   refreshList(){
    this.http.get(this.rootURL+'/Persoon')
    .toPromise().then(res => this.list = res as Lidmaat[]);
  }
  
putLidmaat(formData : Lidmaat){
  return this.http.put(this.rootURL+'/Persoon/'+formData.LidmaatId,formData);
 }

 deleteLidmaat(id : number){
   alert(id);
  return this.http.delete(this.rootURL+'/Persoon/'+id);
 }
}
