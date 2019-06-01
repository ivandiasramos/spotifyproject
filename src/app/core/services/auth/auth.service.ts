import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public getToken(): Observable<any> {
    const params = {
      client_id: '974385e59bef428bb45df3c5836ef0d5',
      client_secret: '7aad5c9ef159415fb92a18d98afec9a9',
      grant_type: 'client_credentials',
    };

    return this.httpClient.post('https://accounts.spotify.com/api/token', params);
  }
}
