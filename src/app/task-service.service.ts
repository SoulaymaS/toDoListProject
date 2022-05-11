import { Injectable, Input } from '@angular/core';
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
      status: false
    },
    {
      
      nom: "go to the movies",
      datee: this.d,
      status: false
    }
  ];

  constructor() { }
  getAllTasks(){
    return this.listTasks;
  }
 
  addTask(newT) {
    this.listTasks.push({
      nom: newT,
      datee: new Date(),
      status: false
    });
  }
  updateTask(T){
    let i= this.listTasks.indexOf(T);
    this.listTasks[i]= T;
  }
  
}
