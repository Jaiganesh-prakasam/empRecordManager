import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ValidationService } from './validation.service';
const routes: Routes = [
  { path: '', redirectTo: 'routing/emp-list', pathMatch: 'full' },
  { path: 'routing', loadChildren: './pages/pages.module#PagesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ValidationService]
})
export class AppRoutingModule { }
