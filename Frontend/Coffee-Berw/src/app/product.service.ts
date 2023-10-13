import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Product} from "./models/Product";
import {Rating} from "./models/Rating";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000/api';

  getAllProducts(): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}/products/`);
  }

  getTheProduct(productId:number): Observable<Product>{
    return this.client.get<Product>(`${this.BASE_URL}/product/${productId}/`);
  }
  getRatingsForProduct(productId: number): Observable<Rating[]>{
    return this.client.get<Rating[]>(`${this.BASE_URL}/product/${productId}/ratings/`)
  }

  putRatingForProduct(productId: number, username:string, rating: number): Observable<Rating>{
    return this.client.put<Rating>(`${this.BASE_URL}/product/${productId}/ratings/`, {username, rating})
    //   .pipe(
    //   catchError(this.handleError)
    // );
  }

  // private handleError(error: HttpErrorResponse){
  //   return error
  // }
}
