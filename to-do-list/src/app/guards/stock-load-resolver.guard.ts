import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskInterface } from '../model/task/task.component';
import { TaskService } from '../task.service';


@Injectable({
  providedIn: 'root'
})

  export class StockLoadResolverService implements Resolve<TaskInterface> {
    constructor(private taskService: TaskService) { }
    resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    TaskInterface | Observable<TaskInterface> | Promise<TaskInterface> {
    const id = route.paramMap.get('id');
    return this.taskService.getTasky(id);
    }
    }