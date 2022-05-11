import { Component, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
task;
isShow= true;
isChecked= true;
tabTasks=[];
  constructor(private taskSer: TaskServiceService) { }

  ngOnInit(): void {
    this.tabTasks= this.taskSer.getAllTasks();
  }
 show(){
  this.isShow= !this.isShow;
 }
  addNewTask(newT){

    this.taskSer.addTask(newT);
    this.isShow = !this.isShow;
  }
  
  changeStatut(c) {
    c.status = !c.status;
    this.taskSer.updateTask(c);
  }
  
  displayStatus(c){
    if (c== false) {
      c ="TODO";
    }else{
      c="DONE";
    }
  }
  deleteTask(t){
    
  }
}
