import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'viewemployees', component: ViewEmployeeComponent },
  { path: 'viewprojects', component: ViewProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
