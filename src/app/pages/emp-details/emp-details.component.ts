import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDetailsService } from './emp-details.service';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss'],
  providers: [ EmpDetailsService ]
})
export class EmpDetailsComponent implements OnInit {
  stepsData = [
    {
      id: 'step1',
      title: 'Employee General Details'
    },
    {
      id: 'step2',
      title: 'Contact'
    },
    {
      id: 'step3',
      title: 'Experience'
    },
    {
      id: 'step4',
      title: 'Skills'
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private empDetailsService: EmpDetailsService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if (queryParams.orderType === 'update') {
        this.empDetailsService.fetchAndPopulateEmployeeDetails(Number(queryParams.id));
      } else if (queryParams.orderType === 'add') {

      }
    });
  }
  post() {
    const temp = {
      empGeneral: {
        firstName: 'Test',
        lastName: 'Tailor',
        fullName: 'John Doe Tailor',
        dob: '19-09-1994',
        age: 26
      },
      empContact: {
        email: 'xyz@gmail.com',
        phone: '979-979-9797',
        socialInfo: {
          url: '/john-doe',
          type: 'facebook'
        }
      },
      empSkill: [
        {
          skill: 'angular',
          rate: 7.5
        },
        {
          skill: 'javascript',
          rate: 7
        }
      ],
      empExperience: [
        {
          companyName: 'abc1',
          location: {
            city: 'chennai',
            country: 'india',
          },
          companyUrl: 'www.abc1.com',
          role: 'junior developer',
          fromDate: '26-06-2015',
          toDate: '31-03-2018',
          experience: 3
        },
        {
          companyName: 'abc2',
          location: {
            city: 'chennai',
            country: 'india'
          },
          companyUrl: 'www.abc2.com',
          role: 'senior developer',
          fromDate: '01-04-2018',
          toDate: 'present',
          experience: 2
        }
      ]
    };
    // this.employeeDetailsService.addHero(temp as EmpDetails).subscribe(employee => {
    // this.employees = [...this.employees, employee];
    // });
  }

}
