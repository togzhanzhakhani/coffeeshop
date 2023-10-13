import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./models/Product";
import {Commentary} from "./models/Commentary";

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {
  BASE_URL = 'http://127.0.0.1:8000/api'
  constructor(private client: HttpClient) { }

  getCommentariesForProduct(productId: number): Observable<Commentary[]>{
    return this.client.get<Commentary[]>(`${this.BASE_URL}/product/${productId}/commentaries/`);
  }

  postCommentaryByUser(username: string, productId: number, text:string): Observable<Commentary>{
    return this.client.post<Commentary>(`${this.BASE_URL}/user/${username}/commentaries/${productId}/`, {"user":username, "text":text});
  }
}
