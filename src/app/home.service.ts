import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getArtists(): Observable<any> {
    return this.http.get(
      'https://api.spotify.com/v1/artists?ids=2Ex4vjQ6mSh5woTlDWto6d,3oKRxpszQKUjjaHz388fVA,0AkpPlFLnr0VQwZQeMGht0,4tZwfgrHOc3mvqYlEYSvVi,3AA28KZvwAUcZuOKwyblJQ,4PwlsrN0t5mLN0C827cbEU'
    );
  }

  getAlbums(): Observable<any> {
    return this.http.get(
      'https://api.spotify.com/v1/albums?ids=6yFKbGAkjgnjQjfttbCAkW,6tNAnVG8xrmMbINuWutrNy,0vwDxngkhZuwNbcxzebCXI,2noRn2Aes5aoNVsU6iWThc,4tUxQkrduOE8sfgwJ5BI2F,7gE23KRzNbXeB6nZmQVqa3'
    );
  }

  getAlbum(albumId: string): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`);
  }
}
