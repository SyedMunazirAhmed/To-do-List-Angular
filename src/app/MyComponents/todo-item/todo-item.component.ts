import { Component , EventEmitter, Input , OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export default class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() checkBox: EventEmitter<Todo> = new EventEmitter();
constructor(){ }
  ngOnInit(): void {
}
OnClick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("OnClick has Been Triggered")
}
OnCheckBoxClick(todo : Todo){
  this.checkBox.emit(todo)
  console.log("OnCheckBoxClick has Been Triggered")
}
}
