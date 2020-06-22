import { Component, OnInit } from '@angular/core';
import { EmployeeFetchDetailsService } from '../../employee-fetch-details.service';
import { EmpDetails } from '../../sharedInterface/emp-details';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees: EmpDetails[];
  employeesSettings = {
    headers : [
      'id',
      'First name',
      'Last name',
      'Full Name',
      'D.O.B',
      'Age'
    ],
    contentFieldArray : [
      ['id'],
      ['empGeneral', 'firstName'],
      ['empGeneral', 'lastName'],
      ['empGeneral', 'fullName'],
      ['empGeneral', 'dob'],
      ['empGeneral', 'age']
    ]
  };
  constructor(
      private employeeFetchDetailsService: EmployeeFetchDetailsService,
      private router: Router) {
    this.employeeFetchDetailsService.getEmployees()
    .subscribe(heroes => {
      this.employees = heroes;
      console.log(heroes);
    });
   }

  ngOnInit(): void {
  }
  addEmplyee(): void {
    this.router.navigate(['/routing/emp-details']);

  }

}
