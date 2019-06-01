export interface SpotifyArtistExternalUrl {
  spotify: string;
}

export interface SpotifyArtistFollower {
  href?: any;
  total: number;
}

export interface SpotifyArtistImage {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyArtist {
  external_urls: SpotifyArtistExternalUrl;
  followers: SpotifyArtistFollower;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyArtistImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface SpotifyArtists {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface SpotifyArtistsResponse {
  artists: SpotifyArtists;
}
