import { Component, Input, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
task;
@Input() tabTasks=[];
  constructor(private taskSer: TaskServiceService) { }

  ngOnInit(): void {
    this.tabTasks= this.taskSer.getAllTasks();
  }

}
