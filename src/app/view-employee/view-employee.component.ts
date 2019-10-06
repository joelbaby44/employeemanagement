import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  product;


  constructor(private employeeservice: EmployeeService) {

    this.product = employeeservice.getAllEmployees();

  }

  ngOnInit() {

  }

}
