import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TODOS } from '../mock-todo';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective, TodoComponent],
  template: `
    <h1>Liste des choses à faire</h1>
    
    <a href="#" role="button" (click)="onClickTodo()">A faire</a>
    <a href="#" role="button" (click)="onClickTodoCompleted()">Terminées</a>
      <ng-container *ngFor="let todo of todoList">
        <todo *ngIf="todo.isCompleted === completedFilter" [value]=todo/>
      </ng-container>
    `,
  styles: []
})
export class TodoListComponent {
  todoList = TODOS;
  completedFilter = false;

  onClickTodo() {
    console.log("A faire");
    this.completedFilter = false;
  }

  onClickTodoCompleted() {
    console.log("Terminée");
    this.completedFilter = true;
  }
}
