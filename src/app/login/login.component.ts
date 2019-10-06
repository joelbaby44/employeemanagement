import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  // getErrorMessage(FormControlerName: FormControl) {
  //   return FormControlerName.hasError('required') ? 'enter a value'
  //   FormControlerName.hasError('pattern') ? 'not valid' :
  // }
  myform: FormGroup;

  constructor(private router: Router, public formbuilder: FormBuilder) {
    this.myform = this.formbuilder.group({
      username: new FormControl("", [Validators.required, Validators.pattern('^user$')]),
      password: new FormControl("", [Validators.required, Validators.pattern('^user$')])
    })
  }


  ngOnInit() {
  }
  // submit(): void {
  //   if (this.username.value == "user" && this.password.value == "user") {
  //     this.router.navigate(['/home'])
  //     // this.service.loginuser=this.username.value;

  //   }
  // }

}
