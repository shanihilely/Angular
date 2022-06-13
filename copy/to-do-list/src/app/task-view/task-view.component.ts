import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../model/task/task.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  tasks: TaskInterface[] = [];
 
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(0, tasks.length));
  }

}
