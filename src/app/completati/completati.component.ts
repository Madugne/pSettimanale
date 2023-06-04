import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  todos: Interfaccia[] = [];
  showMessage: boolean = true;
  constructor(private todoService: ServizioService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.todoService.togliMessaggioDelay().then(() => {
      this.showMessage = false;
    });
  }

  TaskComplete(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  loadTasks(): void {
    this.todoService.getTasks().then((tasks) => {
      this.todos = tasks;
    });
  }
  deleteTask(task: Interfaccia): void {
    this.todoService.deleteTask(task);
  }
}
