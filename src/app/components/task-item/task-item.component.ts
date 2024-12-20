import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteEmitter:EventEmitter<Task> = new EventEmitter();
  @Output() onDblClickEmitter:EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  onClick(task: Task) {
    this.onDeleteEmitter.emit(task);
  }
  onTaggle(task:Task){
    this.onDblClickEmitter.emit(task);
  }

}
