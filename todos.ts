//the todos component

  import { Component } from '@angular/core';

  @Component({
    selector: 'todos',
    templateUrl: 'template.html',
    styleUrls: ['todos.css']
  })

  export class TodosComponent {

    newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      }
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
      //need ES5 to reverse loop in order to splice by index
      for(var i=(this.todos.length -1); i > -1; i--) {
        if(this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

  }

