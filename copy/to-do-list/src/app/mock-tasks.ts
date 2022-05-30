import { TaskInterface } from "./model/task/task.component";

// const date = new Date();
export const TASKS: TaskInterface[] = [
    {
      id:11,
        name: "HTTP + REST",
        startDate: new Date().toDateString(),
        description: "CRUD operations by HTTP verb",
        isDone: false,
       
    },
    {
      id:12,
        name: "BROWSER BASICS",
        startDate: new Date().toDateString(),
        description: "HTML,CSS",
        isDone: false,
        
    },
    {
      id:13,
        name: "Angular",
        startDate: new Date().toDateString(),
        description: "Components, Directives, Templates, Services, DI, Modules, Forms, Routing and Navigations ",
        isDone: false,
       
    },
    {
      id:14,
        name: "JavaScript",
        startDate: new Date().toDateString(),
        description: "Node+Vanilla JS",
        isDone: false,
      
    },
    {
      id:15,
        name: "Summarizing Task",
        startDate: "29.5.22",
        description: "Integrate a mini Todo-List poject",
        isDone: false,
        
    },

];