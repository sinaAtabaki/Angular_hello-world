import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { VorlageComponent } from './vorlage.component';
import { FavoriteChangedEventArgs, FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from "./zippy/zippy.component";
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        CoursesComponent,
        VorlageComponent,
        FavoriteComponent,
        PanelComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent
    ]
})
export class AppComponent {
  //Safe Traversal Operator
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }

  //For NgStyle
  canSave = true;

  post = {
    title: "Title",
    isFavorite: true
  }
  title = 'Angular';

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite was changed", eventArgs.newValue);
  }
}