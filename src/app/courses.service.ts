import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // Hierdurch wird der Service im Root-Injektor verfügbar gemacht und muss nicht in einem Modul bereitgestellt werden.
  })

export class CoursesService {
    getCourses() {
        return ["course1", "course2", "course3"];
    }
}