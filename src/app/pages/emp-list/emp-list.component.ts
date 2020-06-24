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
        contentArray: [['empGeneral', 'dob']],
        callMethod: (date) => {
          if (date) {
            const dob = new Date(date);
            const diffMs = Date.now() - dob.getTime();
            const  ageDt = new Date(diffMs);
            return Math.abs(ageDt.getUTCFullYear() - 1970);
          }
          console.log(date);
        }
      },
    ]
  };
  constructor(
    private employeeFetchDetailsService: EmployeeFetchDetailsService,
    private router: Router) {
      this.fetchEmployee();
  }

  ngOnInit(): void {
  }
  fetchEmployee(): void {
    this.employeeFetchDetailsService.getEmployees()
    .subscribe(heroes => {
      this.employees = heroes;
      console.log(heroes);
    });
  }
  addEmplyee(): void {
    this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'add' } });
  }
  updateEmplyee(id: number): void {
    // console.log(id);
    this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'update', id  } });
  }
  deleteEmployee(id): void {
    this.employeeFetchDetailsService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.fetchEmployee();
    });
  }

}
