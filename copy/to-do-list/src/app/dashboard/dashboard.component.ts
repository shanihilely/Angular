import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../model/task/task.component';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
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