import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter
 } from '@angular/core';
import { ITableSharedFunctionService } from '../i-table-shared-function.service';

@Component({
  selector: 'app-pagination-container',
  templateUrl: './pagination-container.component.html',
  styleUrls: ['./pagination-container.component.scss']
})
export class PaginationContainerComponent implements OnInit, AfterViewInit {
  @Input()totalRecordsSize: number;
  @Input()numberOfRows: string;
  @Output()itemFromTo = new EventEmitter();
  @Output()searchString = new EventEmitter();
  totalDivisions;
  pageNumberSelected: number;
  initialLoad = true;
  constructor() {
   }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    (document.getElementById('rows') as HTMLInputElement).value = this.numberOfRows;
    this.valueChanged(this.numberOfRows);
  }

  valueChanged(tempNumberOfRows: string): void {
    this.numberOfRows = tempNumberOfRows;
    this.numberOfButtons(Number(tempNumberOfRows));
  }
  numberOfButtons(tempNumberOfRows: number): void {
    if (this.pageNumberSelected && document.getElementById(String(this.pageNumberSelected))) {
      document.getElementById(String(this.pageNumberSelected)).classList.remove('active');
    }
    const noOfPges = Math.ceil(this.totalRecordsSize / tempNumberOfRows);
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      this.itemFromTo.emit([0, tempNumberOfRows]);
      this.pageNumberSelected = 1;
      setTimeout(() => {
        document.getElementById('1').classList.add('active');
      }, 0);
    }.bind(this), 0);
  }
  buttonsAfterFilter(totalRecordcount: number) {
    if (this.pageNumberSelected && document.getElementById(String(this.pageNumberSelected))) {
      document.getElementById(String(this.pageNumberSelected)).classList.remove('active');
    }
    const tempNumberOfRows = (document.getElementById('rows') as HTMLInputElement).value;
    const noOfPges = Math.ceil(totalRecordcount / Number(tempNumberOfRows));
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      this.pageNumberSelected = 1;
      setTimeout(() => {
        if (document.getElementById('1')) {
          document.getElementById('1').classList.add('active');
        }
      }, 0);
    }.bind(this), 0);
  }
  jumpToFirst(): void {
    // should stop if it is already in first page
    if (this.pageNumberSelected !== 1 ) {
      const nextNumber = 1;
      this.jumToThisPage(nextNumber);
    }
  }
  previous(): void {
    // should stop if it is already in first page
    if (this.pageNumberSelected !== 1) {
      const nextNumber = this.pageNumberSelected - 1;
      this.jumToThisPage(nextNumber);
    }
  }
  next(): void{
    // already in last page no action taken
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.pageNumberSelected + 1;
      this.jumToThisPage(nextNumber);
    }
  }
  jumpToLast(): void {
    // already in last page no action taken
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.totalDivisions.length;
      this.jumToThisPage(nextNumber);
    }
  }
  jumToThisPage(pageNumber: number): void {
    document.getElementById(String(this.pageNumberSelected)).classList.remove('active');
    this.pageNumberSelected = pageNumber;
    this.itemFromTo.emit([(pageNumber - 1) * Number(this.numberOfRows), pageNumber * Number(this.numberOfRows)]);
    // To add the class after the button is actually added by the program
    setTimeout(() => {
      document.getElementById(String(this.pageNumberSelected)).classList.add('active');
    }, 0);
  }

  searchFilter(x) {
    this.searchString.emit(x);
  }
}
