// export interface Artist {
//   id: number;
//   name: string;
//   image: string;
// }

export interface artists {
  external_urls: object;
  followers: object;
  genres: string[];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

// export const artists: Artist[] = [
//   {
//     id: 1,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
//   {
//     id: 2,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
//   {
//     id: 3,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
//   {
//     id: 4,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
//   {
//     id: 5,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
//   {
//     id: 6,
//     name: 'Dave Mustaine',
//     image: 'assets/Dave-mustaine.webp',
//   },
// ];
