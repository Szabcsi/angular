import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: []
})
export class DashboardAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
