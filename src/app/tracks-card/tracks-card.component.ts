import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tracks } from '../../models/tracks';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-tracks-card',
  templateUrl: './tracks-card.component.html',
  styleUrl: './tracks-card.component.css',
})
export class TracksCardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}
  tracks: tracks[] = [];

  ngOnInit(): void {
    // First get the album id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = routeParams.get('albumId') || '';

    this.homeService.getAlbum(albumIdFromRoute).subscribe((response) => {
      this.tracks = response.items;
      console.log(response);
    });
  }
}
