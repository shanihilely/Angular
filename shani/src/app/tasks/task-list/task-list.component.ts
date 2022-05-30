import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/model/task/task.component';
import { MessageService } from 'src/app/services/message.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  tasks :TaskInterface[]= [];
  
  selectedTask?: TaskInterface;

  

  constructor(private taskService: TaskService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTasks();
  }

    onSelect(task: TaskInterface): void{
    this.selectedTask = task;
      this.messageService.add(`TasksComponent: Selected task num=${task.num}`);
      
  }


  getTasks(): void{
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }




add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.taskService.addTask({ name } as TaskInterface)
    .subscribe(task => {
      this.tasks.push(task);
    });
}
delete(task: TaskInterface): void {
  this.tasks = this.tasks.filter(t => t !== task);
  this.taskService.deleteTask(task.num).subscribe();
}
  
}
