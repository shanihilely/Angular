import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { StockLoadResolverService } from './guards/stock-load-resolver.guard';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: 'tasks/list' },
  // { path: 'tasks/create', component: CreateTaskComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'tasks', component: TasksComponent,
  // canActivate: [AuthGuard] },

  // { path: 'stock/:code', component: TaskDetailComponent,
  // canActivate: [AuthGuard],
  // resolve: { stock: StockLoadResolverService } },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}