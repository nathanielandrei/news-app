import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private _http: HttpClient) {}

  public getNews(): Observable<any> {
    return this._http.get<any[]>('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2727122e9d6f43c0baa4b78ac6a01364');
  }
}
