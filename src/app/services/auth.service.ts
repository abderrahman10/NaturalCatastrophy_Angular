import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerI } from '../pages/interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl = 'http://localhost:8010/api/donation/donator/save';

  register(input: registerI): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}`, input );
  }
}
