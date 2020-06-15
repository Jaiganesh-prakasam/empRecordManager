import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-wizard-steps',
  templateUrl: './i-wizard-steps.component.html',
  styleUrls: ['./i-wizard-steps.component.scss']
})
export class IWizardStepsComponent implements OnInit, AfterViewInit {
  @Input() position: string;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.position);
  }

}
