import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { homeInterceptor } from './home.interceptor';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavigationCardComponent } from './navigation-card/navigation-card.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { TracksCardComponent } from './tracks-card/tracks-card.component';

//Pipes
import { CustomPipe } from './custom.pipe';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationCardComponent,
    LibraryCardComponent,
    MainCardComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    TracksCardComponent,
    CustomPipe,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'tracks/:albumId', component: TracksComponent },
    ]),
  ],
  providers: [provideHttpClient(withInterceptors([homeInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
