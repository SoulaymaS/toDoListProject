
import { RouterModule, Routes } from '@angular/router';
import { DoneTaskComponent } from './done-task/done-task.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';


let routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'todo-list', 
children: [
    {path : '', component: TodoListComponent},
    { path: 'done-task',component: DoneTaskComponent}
],}

];
export const PROJECT_ROUTING = RouterModule.forRoot(routes);
