import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemsObj, Complexity } from '../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['../app.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() task!: itemsObj;
  @Input() index!: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() goRight: EventEmitter<itemsObj> = new EventEmitter <itemsObj>();
  ComplexityEnum = Complexity;
  constructor() {}

  ngOnInit(): void {}
  deleteEvent() {
    console.log(this.index +1);
    this.delete.emit(this.index);
    
  }

  rightEvent(){
    this.goRight.emit(this.task);
  }
}
