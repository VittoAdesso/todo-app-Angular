import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('iaiaiia', true),
    new Todo('iaiaiskskksksia')
  ];

  constructor() { }

  getAllTodos(){
      return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}