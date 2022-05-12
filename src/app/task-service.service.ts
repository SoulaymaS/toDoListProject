import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  d = new Date();

  private listTasks = [];

  constructor(private http: HttpClient) { }
  getAllTasks() {
    return this.listTasks;
  }

  getAllTasksApi() {
   return this.http.get('https://todolistproject-e238b-default-rtdb.firebaseio.com/tasks.json');
    
  }
  getLastTaskAPI(len){
    return this.http.get('https://todolistproject-e238b-default-rtdb.firebaseio.com/tasks.json',len);
  }

  addTask(newT) {
    this.listTasks.push({
      nom: newT,
      datee: new Date(),
      status: false
    });
  }
  addTaskApi(newT) {
    return this.http.post('https://todolistproject-e238b-default-rtdb.firebaseio.com/tasks.json', newT);
  
  }
  updateTask(T) {
    let i = this.listTasks.indexOf(T);
    this.listTasks[i] = T;
  }

}
