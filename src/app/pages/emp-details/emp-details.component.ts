import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
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
  constructor() { }

  ngOnInit(): void {
  }

}
