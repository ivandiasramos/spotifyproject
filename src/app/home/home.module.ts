import { SearchContentModule } from './../shared/search-content/search-content.module';
import { HomeRoutingModule } from './home.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InputSearchModule } from '../shared/input-search/input-search.module';
import { ArtistContentComponent } from './artist-content/artist-content.component';
import { SpotifyService } from '../core/services/spotify/spotify.service';

@NgModule({
  declarations: [HomeComponent, ArtistContentComponent],
  imports: [
    CommonModule,
    InputSearchModule,
    HomeRoutingModule,
    SearchContentModule,
  ],
  providers: [SpotifyService]
})
export class HomeModule { }
