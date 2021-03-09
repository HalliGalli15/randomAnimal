import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { catImage } from './../../interfaces/catImage';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }

  getList(): Observable<catImage[]>{
    return null;
  }
}
