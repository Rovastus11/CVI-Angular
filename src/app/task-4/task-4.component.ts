import { Component } from '@angular/core';

@Component({
  selector: 'app-task-4',
  imports: [],
  template: `
    <h3>Task 4</h3>
    <p>For loop &#64;For</p>
    <br />
  `,
  styles: ``,
})
export class Task4Component {
  items = [
    { key: 1, value: 'a' },
    { key: 2, value: 'b' },
    { key: 3, value: 'c' },
    { key: 4, value: 'd' },
  ];
}
