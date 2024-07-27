// export interface Albums {
//   id: number;
//   name: string;
//   image: string;
//   artist: string;
// }

export interface albums {
  album_type: string;
  artists: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  copyrights: string[];
  external_ids: object;
  external_urls: object;
  genres: [];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: 8;
  tracks: object;
  type: string;
  uri: string;
}

// export const albums: Albums[] = [
//   {
//     id: 1,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
//   {
//     id: 2,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
//   {
//     id: 3,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
//   {
//     id: 4,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
//   {
//     id: 5,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
//   {
//     id: 6,
//     name: 'Rust in peace',
//     image: 'assets/rustInPeace.jpeg',
//     artist: 'Megadeth',
//   },
// ];
