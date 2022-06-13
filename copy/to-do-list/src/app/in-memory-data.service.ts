import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TaskInterface } from './model/task/task.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const tasks = [
      {
        id: 11,
        name: "HTTP + REST",
        startDate: new Date().toDateString(),
        description: "CRUD operations by HTTP verb",
        isDone: false,
    
           
      },
      {
        id: 12,
        name: "Browser Basics",
        startDate: new Date().toDateString(),
        description: "HTML,CSS",
        isDone: false,
         
      },
      {
        id: 13,
        name: "Angular",
        startDate: new Date().toDateString(),
        description: "Components, Directives, Templates, Services, DI, Modules, Forms, Routing and Navigations ",
        isDone: false,
           
      },
      {
        id: 14,
        name: "JavaScript",
        startDate: new Date().toDateString(),
        description: "Node+Vanilla JS",
        isDone: false,
           
      },
      {
        id: 15,
        name: "Summarizing Task",
        startDate: new Date().toDateString(),
        description: "Integrate a mini Todo-List poject",
        isDone: false,
            
      },
    ];
    return {tasks};
  }

  genId(tasks: TaskInterface[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}