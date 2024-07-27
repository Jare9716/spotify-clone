import { Component, OnInit } from '@angular/core';

import { albums } from '../../models/albums';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  albums: albums[] = [];

  ngOnInit(): void {
    this.homeService.getAlbums().subscribe((response) => {
      this.albums = response.albums;
    });
  }
}
