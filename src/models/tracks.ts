export interface tracks {
  album: object;
  artists: {
    external_urls: { spotify: string };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];

  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_ids: { isrc: string };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: false;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

// export const tracks = [
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
//   {
//     artist: { name: 'Modjo' },
//     duration_ms: 187199,
//     name: "Chillin'",
//     track_number: 1,
//   },
// ];
