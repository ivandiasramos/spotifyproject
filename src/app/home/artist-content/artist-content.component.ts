import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SpotifyArtist } from 'src/app/shared/interfaces/spotify/artists/spotify.interfaces';

@Component({
  selector: 'app-artist-content',
  templateUrl: './artist-content.component.html',
  styleUrls: ['./artist-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistContentComponent {

  @Input()
  id: string;

  @Input()
  spotifyArtist: SpotifyArtist;

}
