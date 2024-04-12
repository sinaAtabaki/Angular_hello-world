import { CommonModule} from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  styles: [
    `
      /*
      Styles can be put here as well
      CSS Styles chose the latest style applied, repetition does not lead to errors!
      */
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
  //Hiermit wird der ShadowDom "Emuliert", das ist schon als Default gesetzt
})
export class FavoriteComponent {

        //Output Property, Raising a custom Event, using an Alias
        @Output('change') click = new EventEmitter();
  
        //Input Properties
        //@Input(is-clicked) isClicked = false; Input Properties can be aliased as well
        @Input() isClicked = false;

        onClick(){
          this.isClicked = !this.isClicked;
          this.click.emit({ newValue: this.isClicked });
        }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}