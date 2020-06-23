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
    fieldDefinition: [
      {
        heading: 'id',
        type: 'string',
        contentArray: [['id']]
      },
      {
        heading: 'First name',
        type: 'string',
        contentArray: [['empGeneral', 'firstName']]
      },
      {
        heading: 'Last name',
        type: 'string',
        contentArray: [['empGeneral', 'lastName']]
      },
      {
        heading: 'Full Name',
        type: 'string',
        contentArray: [['empGeneral', 'firstName'], ['empGeneral', 'lastName']]
      },
      {
        heading:  'D.O.B',
        type: 'date',
        contentArray: [['empGeneral', 'dob']]
      },
      {
        heading: 'Age',
        type: 'age',
        contentArray: [['empGeneral', 'age']]
      },
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
