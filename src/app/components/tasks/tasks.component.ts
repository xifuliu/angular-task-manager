import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskItemComponent,
    AddTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  showAddTaskForm:boolean;
  subscription:Subscription;
  
  constructor(private taskService: TaskService, private uiService:UiService) {
    this.subscription = uiService.onToggle().subscribe((value)=>{this.showAddTaskForm=value})
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    //console.log("clicked")

    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks
      .filter(t => t.id !==task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = ! task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

}
