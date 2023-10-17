import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Basket} from "./models/Basket";

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  BASE_URL = 'http://127.0.0.1:8000/api'
  constructor(private client: HttpClient) { }

  getBasketOfTheUser(username: string): Observable<Basket[]>{
    return this.client.get<Basket[]>(`${this.BASE_URL}/user/${username}/basket/`);
  }
  deleteOrderOfTheUser(username:string, productId:number): Observable<any>{
    return this.client.delete<any>(`${this.BASE_URL}/user/${username}/basket/delete/${productId}/`)
  }

  postOrderOfTheUser(username: string, productId:number): Observable<any>{
    return this.client.post<any>(`${this.BASE_URL}/user/${username}/basket/`, {"user":username, "products":productId}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('An error occurred. Please try again later.');
    } else {
      if (error.error && error.error.error) {
        return throwError(error.error.error);
      } else {
        // Handle other types of errors (generic error message)
        return throwError('Something went wrong. Please try again later.');
      }
    }
  }
}
