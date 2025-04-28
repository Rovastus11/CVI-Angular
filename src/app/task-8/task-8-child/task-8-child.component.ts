import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-8-child',
  imports: [],
  template: ` <p>{{ title }}</p> `,
  styles: ``,
})
export class Task8ChildComponent {
  title = '';
}
