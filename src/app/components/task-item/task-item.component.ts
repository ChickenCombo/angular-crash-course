import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task | null = null;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTrash = faTrash;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
}
