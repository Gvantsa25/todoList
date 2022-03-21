import { Component } from '@angular/core';
export interface itemsObj {
  title: string;
  todo: boolean;
  inProgress: boolean;
  done: boolean;
  complexityValue: string;
}

export enum Complexity {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  complexityEnum = Complexity;

  todoList: itemsObj[] = [];
  inProgressList: itemsObj[] = [];
  doneList: itemsObj[] = [];

  complexity: string[] = ['easy', 'medium', 'hard'];
  selectedComplexity: string = '';
  myInput: string = '';
  addItem() {
    if (!this.myInput || !this.selectedComplexity) {
      return;
    }
    this.todoList.push({
      title: this.myInput,
      todo: true,
      inProgress: false,
      done: false,
      complexityValue: this.selectedComplexity,
    });
    this.myInput = '';
    this.selectedComplexity = '';
  }

  deleteItem(index: number) {
    this.todoList.splice(index, 1);
  }

  moveRight(item: itemsObj) {
    if (item.todo) {
      item.todo = false;
      item.inProgress = true;
      this.inProgressList.push(item);
      this.todoList.splice(this.todoList.indexOf(item), 1);
    } else {
      item.inProgress = false;
      item.done = true;
      this.doneList.push(item);
      this.inProgressList.splice(this.inProgressList.indexOf(item), 1);
    }
  }

  moveLeft(item: itemsObj) {
    if (item.inProgress) {
      item.inProgress = false;
      item.todo = true;
      this.todoList.push(item);
      this.inProgressList.splice(this.inProgressList.indexOf(item), 1);
    } else {
      item.inProgress = true;
      item.done = false;
      this.inProgressList.push(item);
      this.doneList.splice(this.doneList.indexOf(item), 1);
    }
  }
}
