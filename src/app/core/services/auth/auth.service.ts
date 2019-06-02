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
    return this.httpClient.get('http://localhost:3000')
      .pipe(
        tap((resp: SpotifyAuthResponse) => this.token = resp.token_type + ' ' + resp.access_token)
      );
  }
}
