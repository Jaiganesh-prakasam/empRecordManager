import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { EmployeeFetchDetailsService } from '../../employee-fetch-details.service';
import { EmpDetails } from '../../sharedInterface/emp-details';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Injectable()
export class EmpDetailsService {
  empDetails: FormGroup;
  empGeneral: FormGroup;
  empContact: FormGroup;
  socialInfo: FormArray;
  empExperienceGroup: FormGroup;
  empExperienceArray: FormArray;
  role: any[] = [
    'Junior Software Enginer',
    'Software Enginer',
    'Senior Software Enginer',
    'Manager'
  ];
  lastkeydown = 0;
  roleList = [];
  empSkill: FormGroup;
  empSkillArray: FormArray;
  skillList = [
    'angular',
    'vue',
    'react',
    'nodejs',
    'dotnet',
    'java',
    'cloud'
  ];
  skillListOptions = [];
  id: number;
  constructor(
    public fB: FormBuilder,
    public employeeFetchDetailsService: EmployeeFetchDetailsService,
    public router: Router,
    public  datePipe: DatePipe) {
    this.empGeneralFormInitiation();
    this.empContactFormInitiation();
    this.empExperienceFormInitiation();
    this.empSkillFormInitiation();
    this.empDetailsFormInitiation();
  }
  empGeneralFormInitiation(): void {
    this.empGeneral = this.fB.group({
      firstName: [
        '' ,
        [ Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.onlyAlphabetsValidator() ]
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.onlyAlphabetsValidator()]
      ],
      dob: ['', [Validators.required, ValidationService.ageValidator(), ValidationService.futureDate()]]
    });
  }
  empContactFormInitiation(): void {
    this.socialInfo = this.fB.array([], ValidationService.storeSocialMediaTypeValidationobjects());
    this.empContact = this.fB.group({
      email: ['', [Validators.required, ValidationService.emailValidator()]],
      phone: ['', [Validators.required, Validators.minLength(10), ValidationService.phoneNumberValidator()]],
      socialInfo: this.socialInfo
    });
    this.addSocialInfo();
  }
  empExperienceFormInitiation(): void {
    this.empExperienceArray = this.fB.array([]);
    this.empExperienceGroup = this.fB.group({
      empExperienceArray : this.empExperienceArray});
    this.addExperience();
  }
  empSkillFormInitiation(): void {
    this.empSkillArray = this.fB.array([]);
    this.empSkill = this.fB.group({
      empExperienceArray : this.empSkillArray
    });
    this.addskill();
  }
  empDetailsFormInitiation(): void {
    this.empDetails = this.fB.group ({
      empGeneral: this.empGeneral,
      empContact: this.empContact,
      empSkill: this.empSkillArray,
      empExperience: this.empExperienceArray
    });
    this.employeeFetchDetailsService.getEmployee(1)
      .subscribe((data) => {
        console.log(data);
        this.empGeneral.patchValue(data.empGeneral);
        // this.empContact.email.patchValue(data.empContact);
        data.empSkill.forEach((element, i) => {
          if ( data.empSkill.length - 1 !== i) {
            this.addskill();
          }
        });
        this.empSkillArray.patchValue(data.empSkill);

        data.empExperience.forEach((element, i) => {
          if ( data.empExperience.length - 1 !== i) {
            this.addExperience();
          }
        });
        this.empExperienceArray.patchValue(data.empExperience);

        data.empContact.socialInfo.forEach((element, i) => {
          if ( data.empContact.socialInfo.length - 1 !== i) {
            this.addSocialInfo();
          }
        });
        this.empContact.patchValue(data.empContact);
        // important to update the existing id
        this.id = data.id;
      });
  }
  addSocialInfo(): void {
    const pattern = '^[A-za-z]*[\][A-za-z]*$';
    const tempGroup = this.fB.group({
      url: ['', [Validators.required, ValidationService.socialMediaUrlValidator() ]],
      type: ['', [Validators.required, ValidationService.socialMediaTypeValidator()]]
    });
    this.socialInfo.push( tempGroup );
  }
  deleteSocialInfo(index: number): void {
    if (this.socialInfo.length > 1) {
      this.socialInfo.removeAt(index);
    }
  }
  addExperience(): void {
    const tempGroup = this.fB.group({
      companyName: ['', [Validators.required, Validators.min(3) , Validators.max(25)]],
      location: this.fB.group({
        city: ['', [Validators.required]],
        country: ['', [Validators.required]]
      }),
      companyUrl: ['', [Validators.required]],
      role: ['', [Validators.required]],
      fromDate: ['', [Validators.required, ValidationService.futureDate()]],
      toDate: ['', [Validators.required, ValidationService.futureDate()]],
      experience: [{value: '', disabled: true}, [Validators.required]],
    });
    this.empExperienceArray.push( tempGroup );
  }
  deleteExperience(index): void {
    if (this.empExperienceArray.length > 1) {
      this.empExperienceArray.removeAt(index);
    }
  }

  getRole($event, index): void {
    const enteredRole = this.empExperienceArray.controls[index].get('role').value;
    this.roleList = [];
    if (enteredRole.length > 2) {
      console.log(enteredRole);
      this.roleList = this.searchFromArray(this.role, enteredRole);
      console.log(this.role);
      console.log(this.roleList);
    }
  }
  storeNewRole(index): void {
    const enteredRole = this.empExperienceArray.controls[index].get('role').value;
    console.log(enteredRole);
    if (!this.role.includes(enteredRole)) {
      this.role.push(enteredRole);
    }
  }
  addskill(): void {
    const tempGroup = this.fB.group({
      skill: ['', [Validators.required, Validators.min(3) , Validators.max(25)]],
      rate: ['', [Validators.required, ValidationService.rating()]],
    });
    this.empSkillArray.push( tempGroup );
  }
  deleteSkill(index): void {
    if (this.empSkillArray.length > 1) {
      this.empSkillArray.removeAt(index);
    }
  }
  getSkill($event, index): void {
    const enteredSkill = this.empSkillArray.controls[index].get('skill').value;
    this.skillListOptions = [];
    if (enteredSkill.length > 2) {
        this.skillListOptions = this.searchFromArray(this.skillList, enteredSkill);
    }
  }
  storeNewSkill(index): void {
    const enteredSkill = this.empSkillArray.controls[index].get('skill').value;
    // console.log(enteredRole);
    if (enteredSkill && !this.skillList.includes(enteredSkill)) {
      this.skillList.push(enteredSkill);
    }
  }
  searchFromArray(arr: Array<string>, regex: string): Array<string> {
    const matches = [];
    let i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().includes(regex.toLowerCase())) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }
  submitForm(): void {
    console.log(this.empDetails);
    console.log(this.empDetails.value);
    if (this.id) {
      this.empDetails.value.id = this.id;
    }
    this.empDetails.value.empGeneral.dob = this.datePipe.transform(this.empDetails.value.empGeneral.dob, 'yyyy-MM-dd' );
    this.employeeFetchDetailsService.addEmployee(this.empDetails.value as EmpDetails).subscribe(employee => {
        console.log(employee);
        this.router.navigate(['/routing/emp-list']);
    });
  }
}
