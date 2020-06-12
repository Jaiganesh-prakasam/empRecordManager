import { Component, OnInit, Input } from '@angular/core';
import { EmpDetails } from '../../sharedInterface/emp-details';
@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss']
})
/***********************************
 * @tableData - Array of objects
 * @settings - headers, content level in the object
 */
export class ITableComponent implements OnInit {
  @Input()tableData: EmpDetails[];
  @Input()settings: any;
  tempDataTable: EmpDetails[];
  constructor() { }

  ngOnInit(): void {
  }

  arrayRange(startEndArray: number[]) {
    this.tempDataTable =  this.tableData.filter((x, i) => i >= startEndArray[0] && i < startEndArray[1] ? true : false);
  }

}
