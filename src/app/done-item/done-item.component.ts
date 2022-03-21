import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemsObj, Complexity} from '../app.component'
@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['../app.component.scss']
})
export class DoneItemComponent implements OnInit {
  constructor() { }
  @Input() task!: itemsObj;
  @Output() goLeft: EventEmitter<itemsObj> = new EventEmitter<itemsObj>();
  ComplexityEnum = Complexity;
  ngOnInit(): void {
  }
  leftEvent(){
    this.goLeft.emit(this.task);
    console.log(this.task?.complexityValue);
  }
}
