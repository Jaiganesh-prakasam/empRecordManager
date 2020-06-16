import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IWizardModule } from '../../generic/i-wizard/i-wizard.module';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpGeneralComponent } from './emp-general/emp-general.component';
import { EmpContactComponent } from './emp-contact/emp-contact.component';
import { EmpSkillComponent } from './emp-skill/emp-skill.component';
import { EmpExperienceComponent } from './emp-experience/emp-experience.component';
const routes: Routes = [
  {
    path: '',
    component: EmpDetailsComponent
  }
];


@NgModule({
  declarations: [
    EmpDetailsComponent,
    EmpGeneralComponent,
    EmpContactComponent,
    EmpSkillComponent,
    EmpExperienceComponent
  ],
  imports: [
    IWizardModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmpDetailsModule { }
