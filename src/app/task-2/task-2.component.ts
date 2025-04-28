import { Component } from '@angular/core';

@Component({
  selector: 'app-task-2',
  imports: [],
  template: `
    <h3>Task 2</h3>
    <p>Interpolation.</p>
    <br />
    <p>{{ name }}</p>
  `,
  styles: ``,
})
export class Task2Component {
  name = '';
}
