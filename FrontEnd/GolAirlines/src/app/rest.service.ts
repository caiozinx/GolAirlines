import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint = "http://localhost:60255/api/";
const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class RestService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /**
   * Airplanes
   */

  getAirplanes(): Observable<any> {
    return this.http.get(endpoint + "Airplane").pipe(map(this.extractData));
  }

  getAirplane(id): Observable<any> {
    return this.http
      .get(endpoint + "Airplane/" + id)
      .pipe(map(this.extractData));
  }

  addAirplane(Airplane): Observable<any> {
    return this.http
      .post<any>(endpoint + "Airplane", JSON.stringify(Airplane), httpOption)
      .pipe(
        tap(Airplane => console.log("Added")),
        catchError(this.errorHandler<any>("AddAirplane"))
      );
  }

  updateAirplane(Airplane): Observable<any> {
    return this.http
      .put(endpoint + "Airplane", JSON.stringify(Airplane), httpOption)
      .pipe(
        tap(t => console.log(`updated`)),
        catchError(this.errorHandler<any>("updateAirplane"))
      );
  }

  deleteAirplane(id): Observable<any> {
    return this.http
      .delete<any>(endpoint + "Airplane/?id=" + id, httpOption)
      .pipe(
        tap(_ => console.log(`deleted Airplane id=${id}`)),
        catchError(this.errorHandler<any>("deleteAirplane"))
      );
  }

  /**
   * AirplaneModels
   */

  getAirplaneModels(): Observable<any> {
    return this.http
      .get<any>(endpoint + "AirplaneModel")
      .pipe(map(this.extractData));
  }

  getAirplaneModel(id): Observable<any> {
    return this.http
      .get(endpoint + "AirplaneModel/" + id)
      .pipe(map(this.extractData));
  }

  addAirplaneModel(AirplaneModel): Observable<any> {
    return this.http
      .post<any>(
        endpoint + "AirplaneModel",
        JSON.stringify(AirplaneModel),
        httpOption
      )
      .pipe(
        tap(AirplaneModel => console.log("Added")),
        catchError(this.errorHandler<any>("AddAirplane"))
      );
  }

  updateAirplaneModel(AirplaneModel): Observable<any> {
    return this.http
      .put(
        endpoint + "AirplaneModel",
        JSON.stringify(AirplaneModel),
        httpOption
      )
      .pipe(
        tap(t => console.log(`updated`)),
        catchError(this.errorHandler<any>("updateAirplaneModel"))
      );
  }

  deleteAirplaneModel(id): Observable<any> {
    return this.http
      .delete<any>(endpoint + "AirplaneModel/?id=" + id, httpOption)
      .pipe(
        tap(_ => console.log(`deleted Airplane id=${id}`)),
        catchError(this.errorHandler<any>("deleteAirplane"))
      );
  }

  private errorHandler<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
