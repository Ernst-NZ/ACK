import {Injectable }from '@angular/core'; 
import {HttpClient }from '@angular/common/http'; 

import {Observable }from 'rxjs/Observable'; 
import {map, catchError }from 'rxjs/operators'; 
import {Globals }from '../globals'; 

import {ILidmaat, IAddress, IGroup  }from '../../app/_shared/interfaces'; 

@Injectable()
export class DataService {

     readonly rootURL = this.globals.dataSource + "/api"
    
    constructor(private http:HttpClient, private globals:Globals) {}

    getLidmate():Observable < ILidmaat[] >  {
      this.globals.lidmaatDetails = '';
        return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
            .pipe(
                catchError(this.handleError)
            ); 
    }
 
    getActive(active: string) : Observable<ILidmaat[]> {
      this.globals.lidmaatDetails = '';
      return this.http.get<ILidmaat[]>(this.rootURL + '/Persoon')
        .pipe(
          map(lede => {
            let custLede = lede.filter((lid: ILidmaat) => lid.IsActive === active);
            return custLede;
          }),
          catchError(this.handleError)
        );
    }
    
    getLidmaat(id:number):Observable < ILidmaat >  {
      this.globals.lidmaatDetails = '';
      return this.http.get < ILidmaat[] > (this.rootURL + '/Persoon')
        .pipe(
          map(lidmate =>  {
            let lidmaat = lidmate.filter((lid:ILidmaat) => lid.LidmaatId === id); 
            return (lidmaat && lidmaat.length)?lidmaat[0]:null; 
          }), 
          catchError(this.handleError)
        )
    }

    geAddress(id:number):Observable < IAddress >  {
      return this.http.get < IAddress[] > (this.rootURL + '/Addresse')
        .pipe(
          map(addresse =>  {
            let adres = addresse.filter((huis:IAddress) => huis.Id === id); 
            return (adres && adres.length)?adres[0]:null; 
          }), 
          catchError(this.handleError)
        )
    }
    

    getAddress():Observable < IAddress[] >  {
      return this.http.get < IAddress[] > (this.rootURL + '/addresse')      
          .pipe(
              catchError(this.handleError)
          );
  }

    private handleError(error:any) {
      console.error('server error:', error); 
      if (error.error instanceof Error) {
          const errMessage = error.error.message; 
          return Observable.throw(errMessage); 
      }
      return Observable.throw(error || 'Node.js server error'); 
    }

    getGroups(setGroup: string) : Observable<IGroup[]> {
      return this.http.get<IGroup[]>(this.rootURL + '/Group')
        .pipe(
          map(groepe => {
            let custGroep = groepe.filter((groep: IGroup) => groep.Group === setGroup);
            return custGroep;
          }),
          catchError(this.handleError)
        );
    }

    getGroepe() : Observable<IGroup[]> {
      return this.http.get<IGroup[]>(this.rootURL + '/Group')
        .pipe(
          catchError(this.handleError)
        );
    }

}