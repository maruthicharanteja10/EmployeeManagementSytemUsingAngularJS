import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-list-employees',
  imports: [NgFor],
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],

  
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[]=[];
  constructor(private employeeService:EmployeeService){
    }

  ngOnInit():void{
    this.getEmployees();
    }
    private getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data => {
        console.log("Fetched Employees:", data);
        this.employees = data;
      },(error) => {
        console.error("Error fetching employees:", error);
      });
    }
}
