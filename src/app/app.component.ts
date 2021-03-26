import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './todo.model';

const alltodos=[
  new Todo('Hit the gym',false),
  new Todo('Pay bills',true),
  new Todo('Meet George',false),
  new Todo('Buy eggs',false),
  new Todo('Read a book',false),
  new Todo('Organize office',false)
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  alltodos=alltodos;
  @ViewChild('new') new:ElementRef
  onAdd(){
    this.alltodos.push(new Todo(this.new.nativeElement.value,false))
    this.new.nativeElement.value=null;
  }
  onChange(todo){
    todo.isCheck = !todo.isCheck
  }
  onDele(i){
    this.alltodos.splice(i,1)
  }
}
