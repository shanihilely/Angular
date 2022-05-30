import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'tasks/list', component: TaskListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:num', component: TaskDetailsComponent },
  { path: '**', redirectTo: 'tasks/list' },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
