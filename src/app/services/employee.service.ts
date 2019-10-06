import { Injectable } from '@angular/core';
import { Employee, Project } from './../model/employee';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmployees: Employee[] = [
    {
      eid: 100,
      fname: "Rama",
      lname: "krishna",
      yoe: 2,
      Doj: "11-10-2010"
    },
    {
      eid: 101,
      fname: "clins",
      lname: "sebastian",
      yoe: 1,
      Doj: "06-04-2014"
    },
    {
      eid: 102,
      fname: "rahul",
      lname: "reji",
      yoe: 5,
      Doj: "12-03-2002"
    },
    {
      eid: 103,
      fname: "Bibin",
      lname: "thomas",
      yoe: 1,
      Doj: "01-09-2016"
    },
    {
      eid: 104,
      fname: "Thomas",
      lname: "kurian",
      yoe: 4,
      Doj: "11-12-2010"
    }
  ];

  allProjects: Project[] = [
    {
      pid: 200,
      pname: "Home Automation",
      pdyear: 1,
      Dos: "11-10-2010"
    },
    {
      pid: 201,
      pname: "E-voting",
      pdyear: 2,
      Dos: "21-05-2010"
    },
    {
      pid: 202,
      pname: "Bomb detector",
      pdyear: 3,
      Dos: "02-02-2009"
    },
    {
      pid: 203,
      pname: "Automatic Attendance",
      pdyear: 2,
      Dos: "14-12-2012"
    },
    {
      pid: 204,
      pname: "E-commerce website",
      pdyear: 5,
      Dos: "01-02-2009"
    }
  ];
  getAllEmployees(): Employee[] {
    return this.allEmployees;
  }
  getAllProjects(): Project[] {
    return this.allProjects;
  }
  addEmployee(employee: Employee) {
    this.allEmployees.push(employee);
  }
  // loginuser(credentials){
  //   return this.http.post( ,JSON.stringify(credentials));
  // }
  constructor() { }
}
