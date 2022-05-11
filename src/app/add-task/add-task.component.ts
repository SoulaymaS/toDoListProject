import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSer: TaskServiceService) { }

  ngOnInit(): void {
  }
  addNewTask(newT){
this.taskSer.addTask(newT);
  }
}
