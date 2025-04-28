import { Component } from '@angular/core';

@Component({
  selector: 'app-task-1',
  imports: [],
  template: `
    <h3>Task 1</h3>
    <p>Change paragraph color from red to blue.</p>
    <br />
    <p class="paragraph">This is blue paragraph.</p>
  `,
  styles: `
    p {
      &.paragraph {
        color: red;
      }
    }
  `,
})
export class Task1Component {}
