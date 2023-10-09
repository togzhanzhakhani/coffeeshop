import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthToken} from "./models/AuthToken";
import {UserInfo} from "./models/UserInfo";
import {User} from "./models/User";
import {UserRegister} from "./models/UserRegister";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'http://127.0.0.1:8000/api/user';
  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.client.post<any>(`${this.BASE_URL}/login/`, {username, password}).pipe(
      catchError(this.handleError)
    );
  }
  getInfoAboutUser(username:string): Observable<any>{
    return this.client.get<any>(`${this.BASE_URL}/${username}/`).pipe(
      catchError(this.handleError)
    )
  }
  register(username: string, email:string, password: string): Observable<any>{
    return this.client.post<any>(`${this.BASE_URL}/register/`, {username, email, password}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('An error occurred. Please try again later.');
    } else {
      if(error.error && error.error.detail) {
        return throwError(error.error.detail);
      } else if (error.error && error.error.email) {
        return throwError(error.error.email[0]);
      } else if (error.error && error.error.username) {
        // Handle username validation error
        return throwError(error.error.username[0]);
      } else {
        // Handle other types of errors (generic error message)
        return throwError('Something went wrong. Please try again later.');
      }
    }
  }
}
