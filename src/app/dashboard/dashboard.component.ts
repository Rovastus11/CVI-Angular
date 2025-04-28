import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  template: `
    <h2>Dashboard</h2>
    <br />

    @for (route of routes; track $index) {
    <a
      [routerLink]="route.route"
      routerLinkActive="active"
      ariaCurrentWhenActive="page"
      >{{ route.name }}</a
    ><br />
    }
  `,
  styles: '',
})
export class DashboardComponent {
  routes = this.createRoutes();

  private createRoutes(): { name: string; route: string }[] {
    const routes: { name: string; route: string }[] = [];

    for (let i = 0; i <= 8; i++) {
      routes.push({ name: `Task ${i + 1}`, route: `/task-${i + 1}` });
    }

    return routes;
  }
}
