import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { volunteer } from '../pages/interfaces/volunteer';
import { BehaviorSubject, Observable } from 'rxjs';
import { contribution } from '../pages/interfaces/contribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {


  private ContributionBehavior = new BehaviorSubject<any>(null);

  
  constructor(private httpclient:HttpClient) { }
  private baseUrl = 'http://localhost:8020/api/volunteering/distribution/save';
  private baseUrl1 = 'http://localhost:8020/api/volunteering/distribution/all';
  private baseUrl2 = 'http://localhost:8020/api/volunteering/distribution/done';
  private baseUrl3 = 'http://localhost:8020/api/volunteering/distribution/undone';
  private baseUrl4 = 'http://localhost:8020/api/volunteering/distribution/delete';


  contibutionSave(input:contribution): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, input );
  }

  getAllContributions(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl1}`);
    
  }
  taskFinished(id:number): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl2}/${id}`,null);
  }
  taskUnfinished(id:number): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl3}/${id}`,null);
  }

  Delete(id:number): Observable<any> {
    return this.httpclient.delete<any>(`${this.baseUrl4}/${id}`);
  }
  getMessage(): Observable<any> {
    return this.ContributionBehavior.asObservable();
  }

  sendMessage(message: string) {
    this.ContributionBehavior.next(message);
  }


}
