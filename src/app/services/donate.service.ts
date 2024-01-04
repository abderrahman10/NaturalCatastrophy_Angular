import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { donateAll, donateMoney } from '../pages/interfaces/donate-money';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  private MoneyBehavior = new BehaviorSubject<any>(null);

  constructor(private httpclient:HttpClient) { }
  private baseUrl = 'http://localhost:8010/api/donation/money/save';
  private baseUrl2 = 'http://localhost:8010/api/donation/item/save';
  private baseUrl3 = 'http://localhost:8010/api/donation/item/all';
  private baseUrl4 = 'http://localhost:8010/api/donation/money/all';
  private baseUrl5 = 'http://localhost:8010/api/donation/money/total-money';


  donateMoney(input:donateMoney): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, input );
  }
  donateall(input:donateAll): Observable<any> {
    return this.httpclient.post(`${this.baseUrl2}`, input );
  }

  getAllDonations(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl3}`);
    
  }
  getMoneyDonation(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl4}`);
    
  }
  getMoneyBalance(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl5}`);
    
  }


  getMessage(): Observable<any> {
    return this.MoneyBehavior.asObservable();
  }

  sendMessage(message: string) {
    this.MoneyBehavior.next(message);
  }
}
