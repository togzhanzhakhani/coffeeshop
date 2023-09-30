import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000/api';

  getAllProducts(): Observable<Product[]>{
    return this.client.get<Product[]>(`${this.BASE_URL}/products/`);
  }

}
