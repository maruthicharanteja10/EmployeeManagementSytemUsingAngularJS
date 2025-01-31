import { Component } from '@angular/core';

import { ListEmployeesComponent } from './list-employees/list-employees.component';

@Component({
  selector: 'app-root',
  imports: [ListEmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'emp-angular';
}
