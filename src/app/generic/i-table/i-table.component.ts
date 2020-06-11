import { Component, OnInit, Input } from '@angular/core';

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
  @Input()tableData: any;
  @Input()settings: any;
  constructor() { }

  ngOnInit(): void {
  }

}
