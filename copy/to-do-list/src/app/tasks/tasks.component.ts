import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../model/task/task.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({name} as TaskInterface)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: TaskInterface): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task.id).subscribe();
  }
}