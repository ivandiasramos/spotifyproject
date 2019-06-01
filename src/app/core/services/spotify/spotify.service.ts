import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyArtistsResponse } from 'src/app/shared/interfaces/spotify/artists/spotify.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'Bearer BQDLsm7K-uEUT7nL9U2AJVi0PuLRtEoZkwDyctHua0YenSiV9VTTDBdflUSMkl-wxE8j0Vh8pswxHgqKSmM';

  private readonly url = 'https://api.spotify.com/v1/';

  constructor(private httpClient: HttpClient) { }

  public getArtists(artist: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.token });

    const params = new HttpParams()
      .set('q', artist)
      .set('type', 'artist');

    return this.httpClient.get(`${this.url}search/`, { headers, params });
  }

  public getArtist(id: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.token });

    return this.httpClient.get(`${this.url}artists/${id}`, { headers });
  }
}
