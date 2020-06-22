import { Component, OnInit } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service';
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

  lastkeydown = 0;
  constructor(public empDetailsService: EmpDetailsService) {

  }

  ngOnInit(): void {
  }


}
