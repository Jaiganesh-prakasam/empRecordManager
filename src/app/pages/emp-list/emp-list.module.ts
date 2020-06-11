import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ITableModule } from '../../generic/i-table/i-table.module';
import { EmpListComponent } from './emp-list.component';
const routes: Routes = [
  {
    path: '',
    component: EmpListComponent
  }
];
@NgModule({
  declarations: [EmpListComponent],
  imports: [
    CommonModule,
    ITableModule,
    RouterModule.forChild(routes),
  ]
})
export class EmpListModule { }
