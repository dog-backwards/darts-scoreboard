import { Component, VERSION } from '@angular/core';
import { Task } from "./task";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tasks: Task[];

 createTask(name: string, deadline: string) {
    const task: Task = {
      name, // zamiast name: name,
      deadline,
      done: false
    };
    this.tasks.push(task);
  }
}