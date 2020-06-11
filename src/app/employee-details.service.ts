import { Injectable } from '@angular/core';
import { EmpDetails } from './sharedInterface/emp-details';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  private heroesUrl = 'api/employees';
  constructor(  private http: HttpClient) { }
  /** GET heroes from the server */
  getHeroes(): Observable<EmpDetails[]> {
    return this.http.get<EmpDetails[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<EmpDetails[]>('getHeroes', []))
      );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<EmpDetails> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<EmpDetails>(url).pipe(
      catchError(this.handleError<EmpDetails>(`getHero id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
