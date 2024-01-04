import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { volunteer } from '../pages/interfaces/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  private BloodBehavior = new BehaviorSubject<any>(null);

  
  constructor(private httpclient:HttpClient) { }
  private baseUrl = 'http://localhost:8020/api/volunteering/volunteer/save';
  private baseUrl1 = 'http://localhost:8020/api/volunteering/volunteer/all';
  private baseUrl2 = 'http://localhost:8020/api/volunteering/volunteer/verify';
  private baseUrl3 = 'http://localhost:8020/api/volunteering/volunteer/inverify';
  private baseUrl4 = 'http://localhost:8020/api/volunteering/volunteer/delete';



  volunteer(input:volunteer): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, input );
  }
  getAllVolunteers(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl1}`);
    
  }
  
  ValidateVolunteerById(id:number): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl2}/${id}`,null);
  }
  InValidateVolunteerById(id:number): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl3}/${id}`,null);
  }

  Delete(id:number): Observable<any> {
    return this.httpclient.delete<any>(`${this.baseUrl4}/${id}`);
  }
  getMessage(): Observable<any> {
    return this.BloodBehavior.asObservable();
  }

  sendMessage(message: string) {
    this.BloodBehavior.next(message);
  }
}
