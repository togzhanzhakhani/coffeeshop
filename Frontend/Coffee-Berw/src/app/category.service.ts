import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/Product';
import { Sort } from './models/Sort';
import { Type } from './models/Type';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000/api';

  getAllSorts(): Observable<Sort[]> {
    return this.client.get<Sort[]>(`${this.BASE_URL}/sorts/`);
  }

  getAllTypes(): Observable<Type[]> {
    return this.client.get<Type[]>(`${this.BASE_URL}/types/`);
  }
}
