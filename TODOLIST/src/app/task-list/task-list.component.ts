import { Component, OnInit } from '@angular/core';
import { ToDoTask } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  task: ToDoTask = {
    name: "HTTP",
    startDate: new Date(),
    description: "CRUD operations by HTTP verb",
    isDone: false,
  }


  constructor() { }

  ngOnInit(): void {
    this.task.startDate = new Date();
    this.task.startDate.setDate(this.task.startDate.getDate() - 17);
  }

}
