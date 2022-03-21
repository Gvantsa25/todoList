import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {} from '@fortawesome/free-solid-svg-icons/'
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DoneItemComponent } from './done-item/done-item.component';
import { InprogressItemComponent } from './inprogress-item/inprogress-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DoneItemComponent,
    InprogressItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
