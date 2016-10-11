import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'Study angular 2'
      },
      {
        text: 'Buy cooking oil'
      },
      {
        text: 'Cleaning floor'
      }
    ];
  }

  addTodo() {
    if ( this.text != '' ) {
        var obj = { text: this.text };
        this.todos.push(obj);
    }
    this.text = '';
  }

  removeTodo(todo) {
    for ( var i = 0; i < this.todos.length; i++ ) {
      if ( this.todos[i].text == todo ) {
        this.todos.splice(i, 1);
      }
    }

  }

}
