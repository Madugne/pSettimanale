import { Injectable } from '@angular/core';
import { Interfaccia } from './interfaccia';

@Injectable({
  providedIn: 'root',
})
export class ServizioService {
  private todos: Interfaccia[] = [];
  constructor() {}
  getTasks(): Promise<Interfaccia[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos);
      }, 2000);
    });
  }
  addTask(task: Interfaccia): void {
    this.todos.push(task);
  }
  deleteTask(task: Interfaccia): void {
    const index = this.todos.indexOf(task);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  togliMessaggioDelay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
