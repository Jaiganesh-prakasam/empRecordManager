import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EmpDetailsService } from '../emp-details.service';
import { ValidationService } from '../../../validation.service';
@Component({
  selector: 'app-emp-contact',
  templateUrl: './emp-contact.component.html',
  styleUrls: ['./emp-contact.component.scss']
})
// Contact Info
// ------------
// Email:
//   type string;
//   Validation
//     Required, must be a valid domain
// phone:
//   type string;
//   Validation
//     Required, must be a 10 digit (format : xxx-xxx-xxxx)
// Social_Info:
//   - allow user to  add multiple  social info
//   - minimum one URL Required
//   type - example  [ {"url":"facebook/jsnuggets", type:"facebook"]
//   Validation  -  valid URL/Id , unique
export class EmpContactComponent implements OnInit {
  empContact: FormGroup;
  socialInfo: FormArray;
  constructor(
    public empDetailsService: EmpDetailsService,
    public fB: FormBuilder
  ) {
    this.socialInfo = this.fB.array([], ValidationService.storeSocialMediaTypeValidationobjects());
    this.empContact = this.fB.group({
      email: ['', [Validators.required, ValidationService.emailValidator()]],
      phone: ['', [Validators.required, Validators.minLength(10), ValidationService.phoneNumberValidator()]],
      socialInfo: this.socialInfo
    });
    this.addSocialInfo();
   }

  ngOnInit(): void {
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

}
