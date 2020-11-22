import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from './classes/exchange-rate';
import { ExhangeRateApiServiceService } from './services/exhange-rate-api-service.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exchange-rate';

  authRequest:any={
    "username":"admin",
    "password":"admin"
  };

  exchangeRate:ExchangeRate

  response:any;
  value="latest";

  constructor(private exhangeRateApiServiceService:ExhangeRateApiServiceService){

  }

  ngOnInit(){
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp=this.exhangeRateApiServiceService.generateToken(authRequest);
    resp.subscribe(data=>this.accessApi(data,this.value));
      }

      public accessApi(token,value){
        let resp=this.exhangeRateApiServiceService.getExchangeRate(token,value);
        resp.subscribe(data=>this.exchangeRate=data);
       }


       sixMonthData(authRequest){
        this.value="sixMonth";
        let resp=this.exhangeRateApiServiceService.generateToken(this.authRequest);
        resp.subscribe(data=>this.accessApi(data,this.value));
       
       }
}
