import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  d = new Date();
  gotkey;
  link = 'https://todolistproject-e238b-default-rtdb.firebaseio.com/tasks.json';
  private listTasks = [];

  constructor(private http: HttpClient) { }
  getAllTasks() {
    return this.listTasks;
  }

  getAllTasksApi() {
    return this.http.get(this.link);

  }
  getLastTaskAPI(len) {
    return this.http.get(this.link, len);
  }

  addTask(newT) {
    this.listTasks.push({
      nom: newT,
      datee: new Date(),
      status: false
    });
  }
  addTaskApi(newT) {
    return this.http.post(`${this.link}/${newT.id}`, newT);

  }
  updateTask(T) {
    let i = this.listTasks.indexOf(T);
    this.listTasks[i] = T;
  }
  updateTaskAPI(T) {
    console.log(T);
    let o = new Object();
    o[T['id']] = {
      "nom": T.nom,
      "datee": T.datee,
      "status": T.status
    }
    return this.http.patch(`${this.link}/${T.id}`, o); 
  }


}
