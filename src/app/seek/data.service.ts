import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://giveseek.appspot.com/give';
  constructor(private _http: HttpClient) { }

  getInfo() {
    return this._http.get<Info[]>(this.apiUrl);
  }
}
