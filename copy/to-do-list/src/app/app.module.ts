import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MessagesComponent } from './message/message.component';
import { MessageService } from './message.service';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './task.service';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './user.service';
import { AuthGuard } from './guards/auth.guard';
import { TaskViewComponent } from './task-view/task-view.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskSearchComponent,
    TasksComponent,
   
    MessagesComponent,
    TaskDetailComponent,
    LoginComponent,
    RegisterComponent,
    TaskViewComponent,
    
  ],
  providers: [
    TaskService,
    MessageService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }