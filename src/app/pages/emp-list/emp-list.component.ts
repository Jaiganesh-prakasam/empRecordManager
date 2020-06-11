import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../../employee-details.service';
import { EmpDetails } from '../../sharedInterface/emp-details';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees: EmpDetails[];
  employeesSettings = {
    headers : [
      'First name',
      'Last name',
      'Full Name',
      'D.O.B',
      'Age'
    ],
    contentFieldArray : [
      ['empGeneral', 'firstName'],
      ['empGeneral', 'lastName'],
      ['empGeneral', 'fullName'],
      ['empGeneral', 'dob'],
      ['empGeneral', 'age']
    ]
  };
  constructor(private employeeDetailsService: EmployeeDetailsService) {
    this.employeeDetailsService.getHeroes()
    .subscribe(heroes => {
      this.employees = heroes;
      console.log(heroes);
    });
   }

  ngOnInit(): void {
  }

}
