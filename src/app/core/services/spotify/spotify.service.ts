import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private readonly url = 'https://api.spotify.com/v1/';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getArtists(artist: string): Observable<any> {

    const headers = new HttpHeaders({ Authorization: this.authService.token });
    const params = new HttpParams()
      .set('q', artist)
      .set('type', 'artist');

    return this.httpClient.get(`${this.url}search/`, { headers, params });
  }

  public getArtist(id: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.authService.token });

    return this.httpClient.get(`${this.url}artists/${id}`, { headers });
  }
}
