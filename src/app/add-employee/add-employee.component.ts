import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
