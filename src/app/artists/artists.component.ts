import { Component, OnInit } from '@angular/core';

import { artists } from '../../models/artist';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css',
})
export class ArtistsComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  artists: artists[] = [];

  ngOnInit(): void {
    this.homeService.getArtists().subscribe((response) => {
      this.artists = response.artists;
    });
  }
}
