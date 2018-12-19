import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegForm1Component} from './reg-form1/reg-form1.component';
import {RegForm2Component} from './reg-form2/reg-form2.component';

const routes: Routes = [
  { path: 'registration/step1',      component: RegForm1Component },
  { path: 'registration/step2',    component: RegForm2Component},
  { path: '', redirectTo: 'registration/step1', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
