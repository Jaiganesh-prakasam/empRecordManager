import { Component, OnInit, Input, AfterViewInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { EmpDetails } from '../../sharedInterface/emp-details';
import { LowerCasePipe } from '@angular/common';
import { PaginationContainerComponent } from './pagination-container/pagination-container.component';
import { ITableSharedFunctionService } from './i-table-shared-function.service';
@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss'],
  providers: [ITableSharedFunctionService]
})
/***********************************
 * @tableData - Array of objects
 * @settings - headers, content level in the object
 */
export class ITableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()tableData: EmpDetails[];
  @Input()settings: any;
  @ViewChild(PaginationContainerComponent) private containerComponent: PaginationContainerComponent;
  localTableData: EmpDetails[];
  tempDataTable: EmpDetails[];
  filterTableData: EmpDetails[];
  startEndArrayState: number[];
  tableLength: number;
  constructor(private iTableSharedFunctionService: ITableSharedFunctionService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes && this.startEndArrayState && this.tableData) {
      this.filterTableData = null;
      this.arrayRange(this.startEndArrayState, 'fromFilter');
    }
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {}
  arrayRange(startEndArray: number[], fromFilter?: string) {
    this.startEndArrayState = startEndArray;
    console.log(this.tableData);
    if (!this.filterTableData) {
      this.tempDataTable =  this.tableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter === 'fromFilter') {
        this.containerComponent.buttonsAfterFilter(this.tableData.length);
      }
    } else {
      console.log('from filter');
      this.tempDataTable =  this.filterTableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
      if (fromFilter ===  'fromFilter') {
        this.containerComponent.buttonsAfterFilter(this.filterTableData.length);
      }
    }
  }

  public filterData(x): void {
    console.log(x);
    if (x[0] !== '') {
      const searchField = this.settings.fieldDefinition;
      // console.log(searchField);
      let searchString = '';
      const subString = x[0].toLowerCase();
      this.filterTableData =  this.tableData.filter((item) => {
        const matchFound  = searchField.filter(searchObject => {
          searchString = this.iTableSharedFunctionService.mutiValueCombination(item, searchObject.contentArray);
          if (searchString.toLowerCase().includes(subString)) {
            return true;
          }
        });
        return matchFound.length > 0;
      });
      this.arrayRange(this.startEndArrayState, 'fromFilter');
    } else {
      // to reinitialize the data when there is an empty search term
      this.filterTableData = null;
      this.arrayRange(this.startEndArrayState, 'fromFilter');
    }
  }

}
