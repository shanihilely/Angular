import { Component, OnInit } from '@angular/core';
import { TaskInterface } from 'src/app/model/task/task.component';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  public task: TaskInterface;
  public confirmes = false;
  public message = null;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  initializeTask() {
    this.task =  {
      num:0,
        name: "",
        startDate: new Date().toString(),
        description: "",
      isDone: false,
        
    };
  }

  setTaskNum(num) {
    this.task.num = num;
    
  }

  createTask(taskForm) {
    if (taskForm.valid) {
      this.taskService.createTask(this.task)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.initializeTask();
          }, (err) => {
            this.message = err.error.msg;
          });
    } else {
      console.error('task form is in an invalid state');
    }
    
  }
}
