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
      visibility: true
    },
    {
      id: 'step2',
      visibility: false
    },
    {
      id: 'step3',
      visibility: false
    },
    {
      id: 'step4',
      visibility: false
    },
    {
      id: 'step5',
      visibility: false
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
