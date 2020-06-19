import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EmpDetailsService } from '../emp-details.service';
import { ValidationService } from '../../../validation.service';
import * as moment from 'moment';
@Component({
  selector: 'app-emp-experience',
  templateUrl: './emp-experience.component.html',
  styleUrls: ['./emp-experience.component.scss']
})
// Work Experience Info
// --------------------
// work experiences:
//   - Allow user to add Experience details
//   - Details must include , company name, location(city,country),
//   company url, your role, date (from, to), experience(calculate from  date filed)
// type Array -
//   validation
//     - Required all field
//     - proper validation
//     - date  validation ( format month/date/year)
//     - company_url  - valid format
//     - Role field must be an auto complete search
//       if role not exist in list we have to add that skill into list
//     - company name - Min -3  Max-25 Char, Alphabets only
export class EmpExperienceComponent implements OnInit {
  empExperienceGroup: FormGroup;
  empExperienceArray: FormArray;

  role: any[] = [
    'Junior Software Enginer',
    'Software Enginer',
    'Senior Software Enginer',
    'Manager'
  ];
  lastkeydown1 = 0;
  subscription: any;
  userList1 = [];
  constructor(
    public empDetailsService: EmpDetailsService,
    public fB: FormBuilder
  ) {
    this.empExperienceArray = this.fB.array([]);
    this.empExperienceGroup = this.fB.group({
      empExperienceArray : this.empExperienceArray});
    this.addExperience();
  }

  ngOnInit(): void {
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

  getRole($event) {
    const enteredRole = (document.getElementById('userIdFirstWay') as HTMLInputElement).value;
    this.userList1 = [];
    if (enteredRole.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 400) {
        this.lastkeydown1 = Number($event.timeStamp);
        this.userList1 = this.searchFromArray(this.role, enteredRole);
      }
    }
  }

  searchFromArray(arr: Array<string>, regex: string): Array<string> {
    const matches = [];
    let i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }

  storeNewRole() {
    const enteredRole = (document.getElementById('userIdFirstWay') as HTMLInputElement).value;
    console.log(enteredRole);
    if (!this.role.includes(enteredRole)) {
      this.role.push(enteredRole);
    }
  }
  experienceCalculation(from , to) {
    // console.log(from , to);
    if (from && to) {
      from = moment(from);
      to = moment(to);
      const years = to.diff(from , 'years');
      from.add(years, 'years');

      const months = to.diff(from , 'months');
      from.add(months, 'months');

      const days = to.diff(from , 'days');
      return years + ' Y ' + months + ' M ' + days + ' D ';
    } else {
      return 'select from and to date';
    }
  }

}
