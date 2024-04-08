import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <div (click)="onDivClicked()">
        <button (click)="onClick($event)">EventButton</button>
    </div>

    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">StyleExample</button>
    <button class="btn btn-primary" [class.active]="isActive">BootStrapExample</button>

        <table>
            <tr>
                <td [colSpan]="colSpan" ></td>
            </tr>
        </table>
        
        <h2>{{ "Title: " + getTitle() }}</h2>
        <h2 [textContent]="title"></h2>

        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <img src="{{imageUrl}}" alt="Woman taking a picture" />
        <img [src]="imageUrl" alt="Woman taking a picture" />
        `,
    standalone: true,
    imports: [CommonModule]
})
export class CoursesComponent{
    onDivClicked(){
        console.log("Div was clicked");
        window.alert("Div was clicked");
    }
    onClick($event: any){
        //Damit wird das Event Bubbling verhindert und onDivClicked wird nicht ausgelöst
        $event.stopPropagation();

        console.log("Button was clicked", $event);
        window.alert("Button was clicked");
    }

    backgroundColor = "red";
    isActive = false;
    colSpan = 2;

    title = "List of courses";
    getTitle() {
        return this.title;
    }

    imageUrl = "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"

    courses;
    
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
    
