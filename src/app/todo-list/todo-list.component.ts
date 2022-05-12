import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task;
  isShow = true;
  isChecked = true;
  tabTasks= [];
  constructor(private taskSer: TaskServiceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.taskSer.getAllTasksApi().subscribe({
      next: (res) => {
        console.log(res);
        for (const key in res) {
          this.tabTasks.push(res[key]);
            
          }
          console.log(this.tabTasks);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  show() {
    this.isShow = !this.isShow;
  }
  addNewTask(newT) {

    this.taskSer.addTask(newT);
    this.isShow = !this.isShow;
  }

   addNewTaskAPI(newT) {
     this.taskSer.addTaskApi({
        nom: newT,
        datee: new Date(),
        status: false,
     }).subscribe({
       next: (res) => {
         console.log(res);
         this.isShow = !this.isShow;
         window.location.reload();
       },
      error: (err) => {
         console.log(err);
      },
     });
   }

changeStatut(c) {
  c.status = !c.status;
  this.taskSer.updateTask(c);
}

displayStatus(c){
  if (c == false) {
    c = "TODO";
  } else {
    c = "DONE";
  }
}
  
}
