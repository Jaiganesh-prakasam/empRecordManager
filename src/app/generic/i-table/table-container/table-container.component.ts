import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITableSharedFunctionService } from '../i-table-shared-function.service';
@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  @Input() tableData: any;
  @Input() settings: any;
  @Output() sortFieldName = new EventEmitter();
  constructor(public iTableSharedFunctionService: ITableSharedFunctionService) {
  }

  ngOnInit(): void {
  }



}
