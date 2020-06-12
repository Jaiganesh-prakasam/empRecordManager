import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { EmpDetails } from '../../sharedInterface/emp-details';
import { LowerCasePipe } from '@angular/common';
import { PaginationContainerComponent } from './pagination-container/pagination-container.component';
@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss']
})
/***********************************
 * @tableData - Array of objects
 * @settings - headers, content level in the object
 */
export class ITableComponent implements OnInit, AfterViewInit {
  @Input()tableData: EmpDetails[];
  @Input()settings: any;
  @ViewChild(PaginationContainerComponent) private containerComponent: PaginationContainerComponent;
  tempDataTable: EmpDetails[];
  filterTableData: EmpDetails[];
  startEndArrayState: number[];
  tableLength: number;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {}
  arrayRange(startEndArray: number[], fromFilter?: string) {
    this.startEndArrayState = startEndArray;
    if (!this.filterTableData) {
      this.tempDataTable =  this.tableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter === 'fromFilter') {
        this.containerComponent.buttonsAfterFilter(this.tableData.length);
      }
    } else {
      this.tempDataTable =  this.filterTableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter ===  'fromFilter') {
        this.containerComponent.buttonsAfterFilter(this.filterTableData.length);
      }
    }
  }

  public filterData(x): void {
    console.log(x);
    if (x[0] !== '') {
      const searchField = this.settings.contentFieldArray;
      console.log(searchField[0]);
      this.filterTableData =  this.tableData.filter((item) => {
        const searchString = item[searchField[0][0]][searchField[0][1]].toLowerCase();
        const subString = x[0].toLowerCase();
        if (searchString.includes(subString)) {
          return true;
        }
      });
      this.arrayRange(this.startEndArrayState, 'fromFilter');
    } else {
      this.filterTableData = null;
      this.arrayRange(this.startEndArrayState, 'fromFilter');
    }
  }

}
