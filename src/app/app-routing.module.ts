import { StudentDetailsComponent } from './student-details/student-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccesspasswordpageComponent } from './successpasswordpage/successpasswordpage.component'

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/studentlist', 
    pathMatch: 'full' 
  },
  {
    path: 'studentlist',
    component: StudentDetailsComponent
  },
  {
    path: 'studentdetails/:Name',
    component: StudentCardComponent
  },
  {
    path: 'successpassword',
    component: SuccesspasswordpageComponent,
    data: {data: 'Test data'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
