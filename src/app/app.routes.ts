import { Routes } from '@angular/router';
import { Task1Component } from './task-1/task-1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Task2Component } from './task-2/task-2.component';
import { Task3Component } from './task-3/task-3.component';
import { Task4Component } from './task-4/task-4.component';
import { Task5Component } from './task-5/task-5.component';
import { Task6Component } from './task-6/task-6.component';
import { Task8Component } from './task-8/task-8.component';
import { Task9Component } from './task-9/task-9.component';

export const routes: Routes = [
  { path: 'task-1', component: Task1Component },
  { path: 'task-2', component: Task2Component },
  { path: 'task-3', component: Task3Component },
  { path: 'task-4', component: Task4Component },
  { path: 'task-5', component: Task5Component },
  { path: 'task-6', component: Task6Component },
  { path: 'task-8', component: Task8Component },
  { path: 'task-9', component: Task9Component },
  { path: '', component: DashboardComponent },
];
