import { Component } from '@angular/core';

import { albums } from '../../models/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  albums = [...albums];
}
