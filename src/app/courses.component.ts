import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { StarComponent } from './star/star.component';

@Component({
    selector: 'courses',
    template: `
    <!-- Title Casing Challenge -->
    <input type="text" [(ngModel)]="titleCasing"/> <br/>
    <span>{{ titleCasing | titlecase }}</span>
    <!-- Star Challenge -->
    <app-star />
   <!-- Custom Pipe with argument -->
    {{ text | summary:10 }} <br/>
    <!-- Pipes sind in der Doku zu finden https://angular.io/api/common/DatePipe-->
    {{course.title | uppercase | lowercase}} <br/>
    {{course.students | number}} <br/>
    {{course.rating | number:'1.2-3'}} <br/>
    {{course.price | currency:'EUR'}} <br/>
    {{course.releaseDate | date:'short'}} <br/><br/>

    <!-- Two Way Binding: -->
    <input [(ngModel)]="aProperty" (keyup.enter)="onKeyUpTwoWayBinding()" /> <br/> 
    <input #email (keyup.enter)="onKeyUpWithVariable(email.value)"/> <br/>
    <input (keyup.enter)="onKeyUp2()"/> <br/>
    <input (keyup)="onKeyUp($event)" /> <br/><br/>

    <div (click)="onDivClicked()">
        <button (click)="onClick($event)">EventButton</button>
    </div>

    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">StyleExample</button> <br/>
    <button class="btn btn-primary" [class.active]="isActive">BootStrapExample</button>

        <table>
            <thead>
            <tr>
                <td [colSpan]="colSpan" ></td>
            </tr>
            </thead>
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
    imports: [
        CommonModule,
        FormsModule,
        SummaryPipe,
        StarComponent
    ]
})
export class CoursesComponent{
    //Title Casing Challenge
    titleCasing: string = '';

    //custom Pipes
    text = 'Lorem Ipsum bla bla bla';
    //Pipes
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    //Two Way Binding:
    aProperty: string = "me@example.com";

    onKeyUpTwoWayBinding(){
        console.log(this.aProperty);
    }
    onKeyUpWithVariable(email: any){
        console.log(email);
    }
    onKeyUp2(){
        //Einfachere Methode in Angular
        console.log("Enter was pressed");
    }
    onKeyUp($event: any){
        //13 steht für enter
        if($event.keyCode === 13){
            console.log("Enter was pressed");
            console.log($event.target.value);
        } 
    }

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
    
