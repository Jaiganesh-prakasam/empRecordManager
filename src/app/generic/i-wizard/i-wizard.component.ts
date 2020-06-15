import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-wizard',
  templateUrl: './i-wizard.component.html',
  styleUrls: ['./i-wizard.component.scss']
})
export class IWizardComponent implements OnInit, AfterViewInit {
  @Input() selectedStep: string;
  @Input() tabData: any[];

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    let buttonSelected = false;
    for ( const i of this.tabData) {
      console.log(i);
      const contentElement = document.getElementById(i.id);
      const buttonElement = document.getElementById('b' + i.id);
      if (i.id === this.selectedStep) {
        contentElement.style.display = 'block';
        buttonElement.classList.add('actual-dot-complete');
        buttonSelected = true;
        continue;
      } else {
        contentElement.style.display = 'none';
      }
      if (buttonSelected) {
        buttonElement.classList.add('actual-dot-incomplete');
      } else {
        buttonElement.classList.add('actual-dot-complete');
      }
    }
  }

}
