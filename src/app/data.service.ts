import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpRequest
  } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
    constructor(private httpclient: HttpClient, private http: Http) {}

    getById(url:any,id:any){
      return this.httpclient.get(url + id)
    }
    
    getAll(url:any){
      return this.httpclient.get(url);
    }

}