import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskInterface } from '../model/task/task.component';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
  
export class TaskService {
  private tasksUrl = 'api/tasks';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              public messageService: MessageService) { }

              createTask(task: TaskInterface): Observable<any> {
                return this.http.post('/api/task',task);
              }
  
  
  /** GET tasks from the server */
  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.tasksUrl)
    .pipe(
      tap(_ => this.log('fetched tasks')),
      catchError(this.handleError<TaskInterface[]>('getTasks', []))
    );
  }


  /** GET task by num. Return `undefined` when num not found */
  getTaskNo404<Data>(num: number): Observable<TaskInterface> {
    const url = `${this.tasksUrl}/?num=${num}`;
    return this.http.get<TaskInterface[]>(url)
      .pipe(
        map(tasks => tasks[0]), // returns a {0|1} element array
        tap(t => {
          const outcome = t ? 'fetched' : 'did not find';
          this.log(`${outcome} task num=${num}`);
        }),
        catchError(this.handleError<TaskInterface>(`getTask num=${num}`))
      );
  }

 /** GET task by num. Will 404 if id not found */
  getTask(num: number): Observable<TaskInterface> {
    const url = `${this.tasksUrl}/${num}`;
    return this.http.get<TaskInterface>(url).pipe(
      tap(_ => this.log(`fetched task num=${num}`)),
      catchError(this.handleError<TaskInterface>(`getTask num=${num}`))
    );
  }

  /* GET tasks whose name contains search term */
  searchTasks(term: string): Observable<TaskInterface[]> {
    // if not search term, return empty hero array.
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<TaskInterface[]>(`${this.tasksUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found tasks matching "${term}"`) :
         this.log(`no tasks matching "${term}"`)),
      catchError(this.handleError<TaskInterface[]>('searchTasks', []))
    );
  }

    //////// Save methods //////////

   /** POST: add a new hero to the server */
  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.tasksUrl, task, this.httpOptions).pipe(
      tap((newTask: TaskInterface) => this.log(`added task w/ num=${newTask.num}`)),
      catchError(this.handleError<TaskInterface>('addTask'))
      );

  }
  
  /** DELETE: delete the task from the server */
deleteTask(num: number): Observable<TaskInterface> {
  const url = `${this.tasksUrl}/${num}`;

  return this.http.delete<TaskInterface>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted task num=${num}`)),
    catchError(this.handleError<TaskInterface>('deleteTask'))
  );
}
  
   /** PUT: update the hero on the server */
updateTask(task: TaskInterface): Observable<any> {
  return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
    tap(_ => this.log(`updated task num=${task.num}`)),
    catchError(this.handleError<any>('updateTask'))
  );
}
  
  
// markDone(task: TaskInterface): Observable<TaskInterface> {
//   return this.http.patch<TaskInterface>('/api/task/' + task.num,
//     {
//       isDone: !task.isDone
//     });
// }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  } 
  
}
