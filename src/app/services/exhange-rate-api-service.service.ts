import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExhangeRateApiServiceService {

  constructor(private httpClient:HttpClient ) { }

  // getExchangeRate(): Observable<any>{
  //   let body={"username":"admin","password":"admin"}
  //   return this.httpClient.post("localhost:9005/api/v1/authenticate",body);
  // }


  public generateToken(request) {
    return this.httpClient.post<string>("http://localhost:9005/api/v1/authenticate", request, {  responseType: 'json' });
  }


  public getExchangeRate(token,value) {

    let tokenStr = 'Bearer ' + token.jwt;
    let params = new HttpParams().set('data', value);
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<any>("http://localhost:9005/api/v1/data",  {params,headers, responseType: 'json' });
  }
}
