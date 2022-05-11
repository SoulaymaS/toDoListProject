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
    this.tab = this.taskSer.getAllTasks();
    console.log(this.tab);
    this.tab.forEach
      (e => {
        if (e.status) { this.taskDone.push(e) }
      });
    console.log(this.taskDone);
  }
}

