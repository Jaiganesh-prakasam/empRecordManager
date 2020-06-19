import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EmpDetailsService } from '../emp-details.service';
import { ValidationService } from '../../../validation.service';
@Component({
  selector: 'app-emp-skill',
  templateUrl: './emp-skill.component.html',
  styleUrls: ['./emp-skill.component.scss']
})
// Skill Info
// ------------
// Skill Sets
//   - allow user to  add multiple  skill  info
//   - skill field must be an auto complete search
//     - if skill not exist in list we have to add that skill into list
// type Array - example  [ {"skill":"Angular", rate:"2.5"]
//     - rate assume out of 10 (u can use start ration also)
//     - Validation  -  valid URL/Id
// Total Year of Experience:
//   Calculate from  work experiences
export class EmpSkillComponent implements OnInit {
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
  lastkeydown = 0;
  constructor(
    public empDetailsService: EmpDetailsService,
    public fB: FormBuilder
  ) {
    this.empSkillArray = this.fB.array([]);
    this.empSkill = this.fB.group({
      empExperienceArray : this.empSkillArray});
    this.addskill();
  }

  ngOnInit(): void {
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
  getSkill($event): void {
    const enteredRole = (document.getElementById('skill') as HTMLInputElement).value;
    this.skillListOptions = [];
    if (enteredRole.length > 2) {
      if ($event.timeStamp - this.lastkeydown > 400) {
        console.log(this.skillList);
        this.lastkeydown = Number($event.timeStamp);
        this.skillListOptions = this.searchFromArray(this.skillList, enteredRole);
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
  storeNewSkill(): void {
    const enteredRole = (document.getElementById('skill') as HTMLInputElement).value;
    console.log(enteredRole);
    if (!this.skillList.includes(enteredRole)) {
      this.skillList.push(enteredRole);
    }
  }

}
