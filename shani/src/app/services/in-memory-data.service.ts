import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TaskInterface } from '../model/task/task.component';


@Injectable({
    providedIn: 'root',
})
  

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
    const tasks = [
        {
            num:11,
            name: "HTTP + REST",
            startDate:new Date().toDateString(),
            description: "CRUD operations by HTTP verb",
            isDone: false,
    
           
        },
        {
            num:12,
            name: "BROWSER BASICS",
            startDate: new Date().toDateString(),
            description: "HTML,CSS",
            isDone: false,
         
        },
        {
            num:13,
            name: "Angular",
            startDate: new Date().toDateString(),
            description: "Components, Directives, Templates, Services, DI, Modules, Forms, Routing and Navigations ",
            isDone: false,
           
        },
        {
            num:14,
            name: "JavaScript",
            startDate: new Date().toDateString(),
            description: "Node+Vanilla JS",
            isDone: false,
           
        },
        {
            num:15,
            name: "Summarizing Task",
            startDate: new Date().toDateString(),
            description: "Integrate a mini Todo-List poject",
            isDone: false,
            
        },
    ];
    return { tasks };
}


    genId(tasks: TaskInterface[]): number {
        return tasks.length > 0 ? Math.max(...tasks.map(task => task.num)) + 1 : 11;
    }
    
    }