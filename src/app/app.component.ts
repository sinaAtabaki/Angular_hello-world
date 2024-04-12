import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { VorlageComponent } from './vorlage.component';
import { StarChangedEventArgs, StarComponent } from './star/star.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoursesComponent,
    VorlageComponent,
    StarComponent
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

  onStarChange(eventArgs: StarChangedEventArgs){
    console.log("Favorite was changed", eventArgs.newValue);
  }
}