import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Globals } from '../globals';

import { ILidmaat, IAddress, IGroup, IWyke, IWiki } from '../../app/_shared/interfaces';

@Injectable()
export class DataService {

  readonly rootURL = this.globals.dataSource + "/api";
  constructor(private http: HttpClient, private globals: Globals) { }

  getLidmate(): Observable<ILidmaat[]> {
    this.globals.lidmaatDetails = '';
    return this.http.get<ILidmaat[]>(this.rootURL + '/Persoon')
      .pipe(
        catchError(this.handleError)
      );
  }

  getActive(active: string): Observable<ILidmaat[]> {
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

  getBirthday(active: string, fromMonth: number, fromDay: number, endDay: number): Observable<ILidmaat[]> {
    this.globals.lidmaatDetails = '';
    if (fromDay < endDay) {
      endDay = 0;
    }

    //this.nextSunday.setDate(this.nextSunday.getMonth());
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' })
    return this.http.get<ILidmaat[]>(this.rootURL + '/Persoon', { headers: reqHeader })
      .pipe(
        map(lede => {
          let custLede = lede.filter((lid: ILidmaat) =>
            lid.IsActive === 'True' &&
            lid.PublicDates !== '' &&
            new Date(lid.DOB).getMonth() === fromMonth &&
            new Date(lid.DOB).getDate() >= fromDay &&
            (new Date(lid.DOB).getDate() < fromDay + 7 ||  // DOB New Month
              new Date(lid.DOB).getMonth() === fromMonth + 1 &&
              new Date(lid.DOB).getDate() > 0 &&
              new Date(lid.DOB).getDate() < endDay) || // wedding Date
            new Date(lid.WeddingDate).getMonth() === fromMonth &&
            new Date(lid.WeddingDate).getDate() >= fromDay &&
            (new Date(lid.WeddingDate).getDate() < fromDay + 7 || // Wedding Date new month
              new Date(lid.WeddingDate).getMonth() === fromMonth + 1 &&
              new Date(lid.WeddingDate).getDate() > 0 &&
              new Date(lid.WeddingDate).getDate() < endDay)
          )

          return custLede;
        }),
        catchError(this.handleError)
      );
  }

  getLidmaat(id: number): Observable<ILidmaat> {
    this.globals.lidmaatDetails = '';
    return this.http.get<ILidmaat[]>(this.rootURL + '/Persoon')
      .pipe(
        map(lidmate => {
          let lidmaat = lidmate.filter((lid: ILidmaat) => lid.LidmaatId === id);
          return (lidmaat && lidmaat.length) ? lidmaat[0] : null;
        }),
        catchError(this.handleError)
      )
  }

  geAddress(id: number): Observable<IAddress> {
    return this.http.get<IAddress[]>(this.rootURL + '/Addresse')
      .pipe(
        map(addresse => {
          let adres = addresse.filter((huis: IAddress) => huis.Id === id);
          return (adres && adres.length) ? adres[0] : null;
        }),
        catchError(this.handleError)
      )
  }


  getAddress(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(this.rootURL + '/addresse')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }

  getGroups(setGroup: string, einde: Date): Observable<IGroup[]> {
    var begin = new Date();
    begin = new Date(begin.setDate(begin.getDate() - 1));
    return this.http.get<IGroup[]>(this.rootURL + '/Group')
      .pipe(
        map(groepe => {
          let custGroep = groepe.filter((groep: IGroup) =>
            groep.Group1 === setGroup &&
            new Date(groep.Date) >= new Date(begin) &&
            new Date(groep.Date) <= new Date(einde));
          return custGroep;
        }),
        catchError(this.handleError)
      );
  }

  getGroepe(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.rootURL + '/Group')
      .pipe(
        catchError(this.handleError)
      );
  }

  getWyk(WykId: number): Observable<IWyke[]> {
    return this.http.get<IWyke[]>(this.rootURL + '/Wykes/' + WykId)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTest(): Observable<IWyke[]> {
    return this.http.get<IWyke[]>(this.rootURL + '/Wykes/' + 1)
      .pipe(
        catchError(this.handleError)
      );
  }

  getWyke(): Observable<IWyke[]> {
    return this.http.get<IWyke[]>(this.rootURL + '/Wykes')
      .pipe(
        catchError(this.handleError)
      );
  }

  getGroep(groepId: number): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(this.rootURL + '/Group/' + groepId)
      .pipe(
        catchError(this.handleError)
      );
  }
  // ################################################

  getWiki(): Observable<IWiki[]> {
    return this.http.get<IWiki[]>(this.rootURL + '/Wikis')
      .pipe(
        catchError(this.handleError)
      );
  }

}