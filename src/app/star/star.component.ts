import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
        isClicked = false;

        onClick(){
          this.isClicked = !this.isClicked;
        }
}