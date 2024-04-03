import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: '<h2>{{ "Title: " + getTitle() }}</h2>',
    standalone: true
})
export class CoursesComponent{
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}