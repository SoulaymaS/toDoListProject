import { Component, Input, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  taskDone = [];
  tab = [];
  constructor(private taskSer: TaskServiceService) { }

  ngOnInit(): void {
    this.taskSer.getAllTasksApi().subscribe({
      next: (res) => {
        console.log(res);
        for (const key in res) {
          if (res[key]['status']) {
            this.taskDone.push(res[key]);
            
          }
        }
        console.log(this.tab);
        },
        error: (err) => {
          console.log(err);
        },
     });
    
  }

}

  //this.tab.forEach
  // (e => {
  //  if (e.status) { this.taskDone.push(e) }
  // });
  //console.log(this.taskDone);
  //  }