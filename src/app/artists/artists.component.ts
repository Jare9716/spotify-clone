import { Component } from '@angular/core';

import { artists } from '../../models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css',
})
export class ArtistsComponent {
  artists = [...artists];
}
