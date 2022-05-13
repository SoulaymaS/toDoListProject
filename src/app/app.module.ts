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
import { DoneTaskComponent } from './done-task/done-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const firebaseConfig = {
  apiKey: "AIzaSyCHK1Umb4rwEgaz9kKcVSA5tZxaytnZ9UM",
  authDomain: "todolistproject-e238b.firebaseapp.com",
  projectId: "todolistproject-e238b",
  storageBucket: "todolistproject-e238b.appspot.com",
  messagingSenderId: "795654737935",
  appId: "1:795654737935:web:489666fab1b7c3d6a4137a",
  measurementId: "G-54T0FREXK9"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodoListComponent,
    NavbarComponent,
    AddTaskComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PROJECT_ROUTING,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
