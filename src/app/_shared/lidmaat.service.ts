import {Injectable }from '@angular/core'; 
import {Lidmaat }from './lidmaat.model'; 
import {HttpClient }from "@angular/common/http"; 
import {Observable }from 'rxjs/Observable'; 
import {catchError }from 'rxjs/operators'; 
import {ILidmaat }from '../../app/_shared/interfaces'; 
import {Globals }from '../globals'; 

@Injectable( {
  providedIn:'root'
})
export class LidmaatService {
formData:Lidmaat; 
list:Lidmaat[]; 
readonly rootURL ="http://localhost:3000/api"
// readonly rootURL ="https://data.ezy.kiwi/api"
// readonly rootURL = this.globals.dataSource && "/api"
  constructor(private http:HttpClient, private globals:Globals) {}

  postLidmaat(formData:Lidmaat) {
    return this.http.post(this.rootURL + '/Persoon', formData); 
   }

   refreshList() {
    this.http.get(this.rootURL + '/Persoon')
    .toPromise().then(res => this.list = res as Lidmaat[]); 
  }
  
  getLidmate():Observable < ILidmaat[] >  {
    return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
        .pipe(
            catchError(this.handleError)
        ); 
}


putLidmaat(formData:Lidmaat) {
  return this.http.put(this.rootURL + '/Persoon/' + formData.LidmaatId, formData); 
 }

 deleteLidmaat(id:number) {
   alert(id); 
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
}
