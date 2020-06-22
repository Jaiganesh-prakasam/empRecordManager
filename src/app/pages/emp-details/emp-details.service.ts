import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../validation.service';
import { EmployeeFetchDetailsService } from '../../employee-fetch-details.service';
import { EmpDetails } from '../../sharedInterface/emp-details';
import { Router } from '@angular/router';
@Injectable()
export class EmpDetailsService {
  empDetails: FormGroup;
  empGenral: FormGroup;
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
  constructor(
    public fB: FormBuilder,
    public employeeFetchDetailsService: EmployeeFetchDetailsService,
    public router: Router) {
    this.empGenralFormInitiation();
    this.empContactFormInitiation();
    this.empExperienceFormInitiation();
    this.empSkillFormInitiation();
    this.empDetailsFormInitiation();
  }
  empGenralFormInitiation() {
    this.empGenral = this.fB.group({
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
  empContactFormInitiation() {
    this.socialInfo = this.fB.array([], ValidationService.storeSocialMediaTypeValidationobjects());
    this.empContact = this.fB.group({
      email: ['', [Validators.required, ValidationService.emailValidator()]],
      phone: ['', [Validators.required, Validators.minLength(10), ValidationService.phoneNumberValidator()]],
      socialInfo: this.socialInfo
    });
    this.addSocialInfo();
  }
  empExperienceFormInitiation() {
    this.empExperienceArray = this.fB.array([]);
    this.empExperienceGroup = this.fB.group({
      empExperienceArray : this.empExperienceArray});
    this.addExperience();
  }
  empSkillFormInitiation() {
    this.empSkillArray = this.fB.array([]);
    this.empSkill = this.fB.group({
      empExperienceArray : this.empSkillArray
    });
    this.addskill();
  }
  empDetailsFormInitiation() {
    this.empDetails = this.fB.group ({
      empGeneral: this.empGenral,
      empContact: this.empContact,
      empSkill: this.empSkillArray,
      empExperience: this.empExperienceArray,
      id: ''
    },
    );
    this.employeeFetchDetailsService.getEmployee(1)
      .subscribe((data) => {
        console.log(data);
        this.empDetails.patchValue(data);
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
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      companyUrl: ['', [Validators.required]],
      role: ['', [Validators.required]],
      from: ['', [Validators.required, ValidationService.futureDate()]],
      to: ['', [Validators.required, ValidationService.futureDate()]],
      experience: [{value: '', disabled: true}, [Validators.required]],
    });
    this.empExperienceArray.push( tempGroup );
  }
  deleteExperience(index): void {
    if (this.empExperienceArray.length > 1) {
      this.empExperienceArray.removeAt(index);
    }
  }

  getRole($event, index) {
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
      rate: ['', [Validators.required]],
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
  submitForm() {
    console.log(this.empDetails);
    console.log(this.empDetails.value);
    this.employeeFetchDetailsService.addEmployee(this.empDetails.value as EmpDetails).subscribe(employee => {
        console.log(employee);
        this.router.navigate(['/routing/emp-list']);
    });
  }
}
