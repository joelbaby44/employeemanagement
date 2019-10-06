import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  firstname: string;
  lastname: string;
  yoe: number;
  Doj: string;
  employee: Employee;

  submit(form) {
    form.valid;
  }

  yearofexp = [
    { id: 1, years: 1 },
    { id: 2, years: 2 },
    { id: 3, years: 3 },
    { id: 4, years: 4 },
    { id: 5, years: 5 }
  ];
  constructor(private employeeservice: EmployeeService, private router: Router) { }
  // addEmployee(){
  //   this.employee=new Employee(this.random(),this.firstname,this.lastname,this.yoe,this.Doj);
  //   this.employeeservice.addEmployee(this.employee);
  //   this.router.navigate(['/home']);
  // }
  ngOnInit() {
  }

}
