import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CharacterInfo } from "../models/character-info.model";
import { Observable, of, throwError } from 'rxjs'; // Uses the RxJS of() function
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl = 'https://rickandmortyapi.com/api'; // TODO:: Move to configuration file

  // TODO:: Move to interceptor
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /**
   * GET: All characters from API.
   */
  getAllCharacters(): Observable<CharacterInfo> {
    return this.http.get<CharacterInfo>(`${this.baseUrl}/character`, this.httpOptions)
    .pipe(
      catchError(this.handleError<CharacterInfo>('getAllCharacters'))
    )
  }

  /**
   * Handle Http error.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
