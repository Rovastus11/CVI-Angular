import { Component } from '@angular/core';

@Component({
  selector: 'app-task-9-child',
  imports: [],
  template: ` <button (click)="emitValue()">Click me!</button> `,
  styles: ``,
})
export class Task9ChildComponent {
  emitValue() {
    console.log('Emitting child value.');
  }
}
