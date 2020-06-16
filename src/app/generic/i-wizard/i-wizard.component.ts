import { Component, OnInit, Input, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { IWizardStepsComponent } from './i-wizard-steps/i-wizard-steps.component';
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
    this.wizardNavSelector(this.selectedStep);
  }
  wizardNavSelector(selectedStep: string): void {
    this.selectedStep = selectedStep;
    let buttonSelected = false;
    for ( const i of this.tabData) {
      const contentElement = document.getElementById(i.id);
      const navElement = document.getElementById('nav-' + i.id);
      const buttonElement = document.getElementById('button-' + i.id);
      if (i.id === selectedStep) {
        // console.log(i);
        contentElement.style.display = 'block';
        buttonElement.style.display = 'block';
        navElement.classList.remove('actual-dot-incomplete');
        navElement.classList.add('actual-dot-complete');
        buttonSelected = true;
        continue;
      } else {
        console.log(i);
        contentElement.style.display = 'none';
        buttonElement.style.display = 'none';
      }
      if (buttonSelected) {
        navElement.classList.remove('actual-dot-complete');
        navElement.classList.add('actual-dot-incomplete');
      } else {
        navElement.classList.remove('actual-dot-incomplete');
        navElement.classList.add('actual-dot-complete');
      }
    }
  }

  nextWizard(selectedStep: string): void {
    const index = this.tabData.findIndex((x) => x.id === selectedStep);
    // console.log(this.tabData[index + 1].id);
    this.wizardNavSelector(this.tabData[index + 1].id);
  }
  previousWizard(selectedStep: string): void {
    const index = this.tabData.findIndex((x) => x.id === selectedStep);
    // console.log(this.tabData[index - 1].id);
    this.wizardNavSelector(this.tabData[index - 1].id);
  }
}
