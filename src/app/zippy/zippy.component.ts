import { CommonModule } from '@angular/common';
import { Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  isClicked = false;
  title: string = this.el.nativeElement.attributes.title.nodeValue;

  constructor(private el: ElementRef) 
  {}

  toggle(){
    this.isClicked = !this.isClicked;    
  }
}
