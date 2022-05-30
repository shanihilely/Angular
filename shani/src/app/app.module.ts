import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutesModule } from './app-routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { TaskSearchComponent } from './task-search/task-search.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { UserStoreService } from './services/user-store.service';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { MessageService } from './services/message.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    TaskSearchComponent,
    LoginComponent,
    RegisterComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    TaskService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
