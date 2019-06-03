import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SpotifyService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  public getArtists(artist: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.authService.token });
    const params = new HttpParams()
      .set('q', artist)
      .set('type', 'artist');

    return this.httpClient.get(`${environment.url}search/`, { headers, params });
  }

  public getArtist(id: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.authService.token });

    return this.httpClient.get(`${environment.url}artists/${id}`, { headers });
  }
}
