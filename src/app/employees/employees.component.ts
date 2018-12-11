import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  ngOnInit() {
  }

}