import { SpotifyService } from './../core/services/spotify/spotify.service';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { SpotifyArtistsResponse, SpotifyArtist } from '../shared/interfaces/spotify/artists/spotify.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private unsub$ = new Subject();
  public spotifyArtists: Array<SpotifyArtist>;
  public spotifyArtist: SpotifyArtist;
  public showSearchResult: boolean;

  constructor(private spotifyService: SpotifyService) {}

  ngOnDestroy() {
    this.unsub$.complete();
  }

  public getTypedSearch(typed: string): void {
    this.showSearchResult = true;

    if (!typed) {
      typed = ' ';
    }

    this.spotifyService.getArtists(typed)
      .pipe(
        takeUntil(this.unsub$),
        debounceTime(400)
      )
      .subscribe((artistsResp: SpotifyArtistsResponse) => {
        this.spotifyArtists = artistsResp.artists.items;
      });
  }

  public getClickedArtist(artistId: string) {
    this.spotifyService.getArtist(artistId)
      .pipe(
        takeUntil(this.unsub$),
      ).subscribe((artist: SpotifyArtist) => {
        this.spotifyArtist = artist;
      });

    this.showSearchResult = false;
  }

}
