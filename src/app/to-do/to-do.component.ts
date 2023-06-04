import { Component, OnInit } from '@angular/core';
import { Interfaccia } from '../interfaccia';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  todos: Interfaccia[] = [];
  nuovaTask: string = '';
  showMessage: boolean = true;

  constructor(private todoService: ServizioService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.todoService.togliMessaggioDelay().then(() => {
      this.showMessage = false;
    });
  }

  TaskIncomplete(): boolean {
    return this.todos.some((todo) => !todo.completed);
  }

  loadTasks(): void {
    this.todoService.getTasks().then((tasks) => {
      this.todos = tasks;
    });
  }

  addTask(): void {
    if (this.nuovaTask.trim()) {
      const newTask: Interfaccia = {
        id: this.todos.length + 1,
        title: this.nuovaTask.trim(),
        completed: false,
      };
      this.todoService.addTask(newTask);
      this.nuovaTask = '';
    }

    console.log(this.todos);
  }

  deleteTask(task: Interfaccia): void {
    this.todoService.deleteTask(task);
  }

  completeTask(task: Interfaccia): void {
    task.completed = !task.completed;
  }
}
