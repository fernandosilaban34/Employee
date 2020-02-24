import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Treding} from '../modal/entity.treding';
import dataEmployee from '../assets/data/employess.json';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class TredingService
 {

  baseUrl = "http://localhost:8080/trading"

constructor(private http: HttpClient) {}

getAll(): Observable<Treding[]> {
  return this.http.get<Treding[]>(this.baseUrl);
 }

 public postLoan(treding: Treding) {
  return this.http.post(this.baseUrl, treding);
}

}


