import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-container',
  templateUrl: './pagination-container.component.html',
  styleUrls: ['./pagination-container.component.scss']
})
export class PaginationContainerComponent implements OnInit, AfterViewInit {
  @Input()totalRecordsSize: number;
  @Input()numberOfRows: string;
  @Output()itemFromTo = new EventEmitter();
  totalDivisions;
  pageNumberSelected: number;
  constructor() {
    console.log(this.totalRecordsSize);
   }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    (document.getElementById('rows') as HTMLInputElement).value = this.numberOfRows;
    this.valueChanged(this.numberOfRows);
  }

  valueChanged(tempNumberOfRows: string) {
    this.numberOfRows = tempNumberOfRows;
    this.numberOfButtons(Number(tempNumberOfRows));
    console.log(tempNumberOfRows);
  }
  numberOfButtons(tempNumberOfRows: number) {
    if (this.pageNumberSelected) {

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
  jumpToFirst() {
    // should stop if it is already in first page
    if (this.pageNumberSelected !== 1) {
      const nextNumber = 1;
      this.jumToThisPage(nextNumber);
    }
  }
  previous() {
    // should stop if it is already in first page
    if (this.pageNumberSelected !== 1) {
      const nextNumber = this.pageNumberSelected - 1;
      this.jumToThisPage(nextNumber);
    }
  }
  next(){
    // already in last page no action taken
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.pageNumberSelected + 1;
      this.jumToThisPage(nextNumber);
    }
  }
  jumpToLast() {
    // already in last page no action taken
    if (this.pageNumberSelected !== this.totalDivisions.length) {
      const nextNumber = this.totalDivisions.length;
      this.jumToThisPage(nextNumber);
    }
  }
  jumToThisPage(pageNumber: number) {
    document.getElementById(String(this.pageNumberSelected)).classList.remove('active');
    this.pageNumberSelected = pageNumber;
    document.getElementById(String(this.pageNumberSelected)).classList.add('active');
    this.itemFromTo.emit([(pageNumber - 1) * Number(this.numberOfRows), pageNumber * Number(this.numberOfRows)]);
  }

}
