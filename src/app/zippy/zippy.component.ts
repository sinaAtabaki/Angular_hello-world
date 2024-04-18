import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  isClicked = false;
  @Input('title') title: string = "";

  constructor(private el: ElementRef) 
  {}

  toggle(){
    this.isClicked = !this.isClicked;    
  }
}
