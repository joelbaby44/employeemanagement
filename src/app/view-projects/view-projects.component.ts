import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {
  project;

  constructor(private allprojects: EmployeeService) {
    this.project = allprojects.getAllProjects();
  }

  ngOnInit() {
  }

}
