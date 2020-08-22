import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '/home', 
  //   pathMatch: 'full' 
  // },
  {
    path: 'studentdetails/:Name',
    component: StudentCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
