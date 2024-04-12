import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { VorlageComponent } from './vorlage.component';
import { FavoriteChangedEventArgs, FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoursesComponent,
    VorlageComponent,
    FavoriteComponent,
    PanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  title = 'Angular';

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite was changed", eventArgs.newValue);
  }
}