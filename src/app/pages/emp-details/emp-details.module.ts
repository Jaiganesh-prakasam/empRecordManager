import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IWizardModule } from '../../generic/i-wizard/i-wizard.module';
import { EmpDetailsComponent } from './emp-details.component';
const routes: Routes = [
  {
    path: '',
    component: EmpDetailsComponent
  }
];


@NgModule({
  declarations: [
    EmpDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmpDetailsModule { }
