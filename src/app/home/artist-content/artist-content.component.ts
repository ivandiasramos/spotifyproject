import { Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify/spotify.service';
import { takeUntil } from 'rxjs/operators';
import { SpotifyArtist } from 'src/app/shared/interfaces/spotify/artists/spotify.interfaces';

@Component({
  selector: 'app-artist-content',
  templateUrl: './artist-content.component.html',
  styleUrls: ['./artist-content.component.scss']
})
export class ArtistContentComponent implements OnInit {

  private unsub$ = new Subject();

  @Input()
  id: string;

  public spotifyArtist: SpotifyArtist;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getArtist(this.id)
      .pipe(
        takeUntil(this.unsub$),
      ).subscribe((artist: SpotifyArtist) => {
        this.spotifyArtist = artist;

        console.log('this.spotifyArtist: ', this.spotifyArtist);
      });
  }

}
