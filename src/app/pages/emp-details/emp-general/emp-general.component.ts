import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmpDetailsService } from '../emp-details.service';
import { ValidationService } from '../../../validation.service';

@Component({
  selector: 'app-emp-general',
  templateUrl: './emp-general.component.html',
  styleUrls: ['./emp-general.component.scss']
})
// General Info
// ------------
// FirstName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// LastName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// Full name:
//   type string;
//   -  non editable
//   -  append value from fname and lastname
// dob:
//   type string
//   Validation
//     Required, must be a valid date( >18, <80);
// age:
//   - find age by  dob;
export class EmpGeneralComponent implements OnInit {
  empGenral: FormGroup;
  constructor(
    public empDetailsService: EmpDetailsService,
    public fB: FormBuilder
  ) {
    const pattern = '[A-za-z][a-zA-Z ]+';
    this.empGenral = this.fB.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(pattern)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(pattern)]],
      dob: ['', [Validators.required, ValidationService.ageValidator()]]
    });
  }

  ngOnInit(): void {
  }
  ageCalculation(date: string): number {
    if (date) {
      const dob = new Date(date);
      const diffMs = Date.now() - dob.getTime();
      const  ageDt = new Date(diffMs);
      return Math.abs(ageDt.getUTCFullYear() - 1970);
    }
  }

}
