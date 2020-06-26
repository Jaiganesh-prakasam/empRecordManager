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
        // console.log(i);
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
  otherStepValidityChecker(toStepId: string): void {
    const currentPageIndex = this.tabData.findIndex((data) => data.id === this.selectedStep);
    const toPageIndex = this.tabData.findIndex((data) => data.id === toStepId);
    console.log(currentPageIndex , toPageIndex);
    // to navigate to some previous page or to the immediate next page
    if (currentPageIndex > toPageIndex || (currentPageIndex + 1 === toPageIndex)) {
      this.wizardNavSelector(toStepId);
    }
    // to navigate to some other page
    else if (currentPageIndex < toPageIndex) {
      let totalStepsCount = 0;
      let validStepsCount = 0;
      //  all the step in between should be valid
      for ( let i = currentPageIndex + 1; i < toPageIndex; i++) {
        totalStepsCount ++;
        const validityArray = this.tabData[i].formValidation;
        const checkValidity = validityArray
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
        if (checkValidity.length === validityArray.length) {
          validStepsCount ++;
        }
      }
      if (totalStepsCount === validStepsCount) {
        this.wizardNavSelector(toStepId);
      }
    }
  }
  currentStepValidityChecker(toStepId: string): void {
    const element = this.tabData.filter((data) => data.id === this.selectedStep);
    const validityArray = element[0].formValidation;
    // to return true as default when no validation needed
    console.log(element);
    if (!validityArray) {
      this.wizardNavSelector(toStepId);
    } else {
      const checkValidity = validityArray
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
      if (checkValidity.length === validityArray.length) {
        this.otherStepValidityChecker(toStepId);
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
