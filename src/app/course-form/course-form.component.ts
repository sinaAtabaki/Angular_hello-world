import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {
  categories = [
    { id : 1, name : 'Development'},
    { id: 2,  name: 'Art'},
    { id: 3,  name: 'Languages'}
  ]

  submit(f: any){
    console.log(f)
  }
}