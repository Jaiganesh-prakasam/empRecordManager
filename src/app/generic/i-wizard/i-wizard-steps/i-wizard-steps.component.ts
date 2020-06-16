import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-wizard-steps',
  templateUrl: './i-wizard-steps.component.html',
  styleUrls: ['./i-wizard-steps.component.scss']
})
export class IWizardStepsComponent implements OnInit, AfterViewInit {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() stepName: string;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // console.log(this.isFirst);
    // console.log(this.isLast);
  }
  previousPage() {
    this.previous.emit();
  }
  nextPage() {
    this.next.emit();
  }

}
