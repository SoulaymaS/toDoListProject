import { Injectable } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  d=new Date();
  
 

  private listTasks = [
    {
      nom: "I have a lot to do",
      datee: this.d,
      status: "DONE"
    },
    {
      nom: "go to the movies",
      datee: this.d,
      status: "DONE"
    }
  ];

  constructor() { }
  getAllTasks(){
    return this.listTasks;
  }
  addTask(newT) {
    this.listTasks.push(newT);
  }
  update(){
    
  }
  deleteTask(){

  }
}
