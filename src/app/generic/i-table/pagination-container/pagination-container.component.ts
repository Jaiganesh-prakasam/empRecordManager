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
  constructor(public iTableSharedFunctionService: ITableSharedFunctionService) {
   }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    (document.getElementById(this.iTableSharedFunctionService.uuid + '-rows') as HTMLInputElement).value = this.numberOfRows;
    this.valueChanged(this.numberOfRows);
  }

  valueChanged(tempNumberOfRows: string): void {
    this.numberOfRows = tempNumberOfRows;
    this.numberOfButtons(Number(tempNumberOfRows));
  }
  numberOfButtons(tempNumberOfRows: number): void {
    let selectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
    if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
      document.getElementById(selectedPageId).classList.remove('active');
    }
    const noOfPges = Math.ceil(this.totalRecordsSize / tempNumberOfRows);
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      // table will be initated only after emitting the array range
      this.itemFromTo.emit([0, tempNumberOfRows]);
      this.pageNumberSelected = 1;
      selectedPageId = this.iTableSharedFunctionService.uuid + '-1';
      setTimeout(() => document.getElementById(selectedPageId).classList.add('active'));
    }.bind(this), 0);
  }
  // following function is triggered only from the parent using view child
  buttonsAfterFilter(totalRecordcount: number): void {
    let selectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
    if (this.pageNumberSelected && document.getElementById(selectedPageId)) {
      document.getElementById(selectedPageId).classList.remove('active');
    }
    const tempNumberOfRows = (document.getElementById(this.iTableSharedFunctionService.uuid + '-rows') as HTMLInputElement).value;
    const noOfPges = Math.ceil(totalRecordcount / Number(tempNumberOfRows));
    setTimeout(function() {
      this.totalDivisions = new Array(noOfPges);
      this.pageNumberSelected = 1;
      selectedPageId = this.iTableSharedFunctionService.uuid + '-1';
      setTimeout(() => document.getElementById(selectedPageId) ? document.getElementById(selectedPageId).classList.add('active') : null );
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
    const previousSelectedPageId = this.iTableSharedFunctionService.uuid + '-' + this.pageNumberSelected;
    document.getElementById(previousSelectedPageId).classList.remove('active');
    this.pageNumberSelected = pageNumber;
    this.itemFromTo.emit([(pageNumber - 1) * Number(this.numberOfRows), pageNumber * Number(this.numberOfRows)]);
    const currentSelectedPageId = this.iTableSharedFunctionService.uuid + '-' + pageNumber;
    // To add the class after the button is actually added by the program
    setTimeout(() => document.getElementById(currentSelectedPageId).classList.add('active'));
  }

  searchFilter(x): void {
    this.searchString.emit(x);
  }
}
