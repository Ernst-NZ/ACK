import {Injectable }from '@angular/core'; 
import {HttpClient }from '@angular/common/http'; 

import {Observable }from 'rxjs/Observable'; 
import {map, catchError }from 'rxjs/operators'; 
import {Globals }from '../globals'; 

import {ILidmaat }from '../../app/_shared/interfaces'; 

@Injectable()
export class DataService {

   readonly rootURL ="http://localhost:3000/api"
  // readonly rootURL ="https://data.ezy.kiwi/api"
  //   readonly rootURL = this.globals.dataSource && "/api"
    
    constructor(private http:HttpClient, private globals:Globals) {}

    getLidmate():Observable < ILidmaat[] >  {
        return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
            .pipe(
                catchError(this.handleError)
            ); 
    }
 
    
    getLidmaat(id:number):Observable < ILidmaat >  {
      return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
        .pipe(
          map(lidmate =>  {
            let lidmaat = lidmate.filter((lid:ILidmaat) => lid.LidmaatId === id); 
            return (lidmaat && lidmaat.length)?lidmaat[0]:null; 
          }), 
          catchError(this.handleError)
        )
    }

    // getOrders(id: number) : Observable<IOrder[]> {
    //   return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
    //     .pipe(
    //       map(orders => {
    //         let custOrders = orders.filter((order: IOrder) => order.customerId === id);
    //         return custOrders;
    //       }),
    //       catchError(this.handleError)
    //     );
    // }


    private handleError(error:any) {
      console.error('server error:', error); 
      if (error.error instanceof Error) {
          const errMessage = error.error.message; 
          return Observable.throw(errMessage); 
      }
      return Observable.throw(error || 'Node.js server error'); 
    }

}