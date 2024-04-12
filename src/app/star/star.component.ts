import { CommonModule} from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {


        //Output Property, Raising a custom Event
        @Output() change = new EventEmitter();
  
        //Input Properties
        //@Input(is-clicked) isClicked = false; Input Properties can be aliased as well
        @Input() isClicked = false;

        onClick(){
          this.isClicked = !this.isClicked;
          this.change.emit({ newValue: this.isClicked });
        }
}

export interface StarChangedEventArgs {
  newValue: boolean
}