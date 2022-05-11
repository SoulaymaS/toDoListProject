import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PROJECT_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodoListComponent,
    NavbarComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PROJECT_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
