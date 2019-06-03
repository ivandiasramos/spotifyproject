import { SpotifyAuthResponse } from './../../../shared/interfaces/spotify/artists/spotify.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(private httpClient: HttpClient) { }

  public getToken(): Observable<any> {
    const body = {
      client_id: '974385e59bef428bb45df3c5836ef0d5',
      client_secret: '7aad5c9ef159415fb92a18d98afec9a9',
      grant_type: 'client_credentials',
    };

    return this.httpClient.post('/api/token', body)
      .pipe(
        tap((resp: SpotifyAuthResponse) => this.token = resp.token_type + ' ' + resp.access_token)
      );
  }
}
