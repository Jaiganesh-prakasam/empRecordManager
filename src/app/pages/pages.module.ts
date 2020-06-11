import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    redirectTo: 'emp-list',
    pathMatch: 'full'
  },
  {
    path: 'emp-list',
    loadChildren: () =>
    import('./emp-list/emp-list.module').then(
      (m: any) => m.EmpListModule
    )
  },
  {
    path: 'emp-details',
    loadChildren:  () =>
    import('./emp-details/emp-details.module').then(
      (m: any) => m.EmpDetailsModule
    )
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PagesModule { }
