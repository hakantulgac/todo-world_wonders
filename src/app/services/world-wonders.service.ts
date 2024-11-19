import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorldWonders } from '../models/world-wonders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldWondersService {
  constructor(private http: HttpClient) { }

  getWorldWonders(): Observable<WorldWonders[]>{
    var url: string = "https://www.world-wonders-api.org/v0/wonders/";
    return this.http.get<WorldWonders[]>(url)
  }
}
