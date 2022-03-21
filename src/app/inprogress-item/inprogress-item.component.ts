import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemsObj, Complexity } from '../app.component';

@Component({
  selector: 'app-inprogress-item',
  templateUrl: './inprogress-item.component.html',
  styleUrls: ['../app.component.scss']
})
export class InprogressItemComponent implements OnInit {

  constructor() { }
  @Input() task!: itemsObj;
  @Input() index!: number;
  ComplexityEnum = Complexity;
  ngOnInit(): void {
  }
  @Output() goRight: EventEmitter<itemsObj> = new EventEmitter<itemsObj>();
  @Output() goLeft: EventEmitter<itemsObj> = new EventEmitter<itemsObj>();


  rightEvent() {
    this.goRight.emit(this.task);
  }
  leftEvent(){
    this.goLeft.emit(this.task);
  }
}
