import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';
import { GivePost } from './givepost.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://giveseek.appspot.com/give';
  constructor(private _http: HttpClient) { }

  getInfo() {
    return this._http.get<Info[]>(this.apiUrl);
  }

  postInfo(givePost: GivePost) {
    return this._http.post<GivePost[]>(this.apiUrl, givePost);
  }
}