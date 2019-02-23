import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../info.model';
import { GiveSeekRequest } from '../data-model/giveseekrequest.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   apiUrl = 'https://giveandseek.herokuapp.com/give';
  // apiUrl = 'http://localhost:3000/give';
  constructor(private _http: HttpClient) { }

  getInfo() {
    return this._http.get<Info[]>(this.apiUrl);
  }

  postInfo(req: GiveSeekRequest) {
    return this._http.post<GiveSeekRequest>(this.apiUrl, req);
  }



}
