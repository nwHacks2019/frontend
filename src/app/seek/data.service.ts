import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://giveandseek.herokuapp.com/ask';
  // apiUrl = 'http://localhost:3000/ask';
  constructor(private _http: HttpClient) { }

  getInfo() {
    return this._http.get<Info[]>(this.apiUrl);
  }
  postInfo(seekPost: Info) {
    return this._http.post<Info>(this.apiUrl, seekPost);
  }

}
