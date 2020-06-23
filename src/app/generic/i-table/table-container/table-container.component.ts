import { Component, OnInit, Input } from '@angular/core';
import { ITableSharedFunctionService } from '../i-table-shared-function.service';
@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  @Input() tableData: any;
  @Input() settings: any;
  constructor(public iTableSharedFunctionService: ITableSharedFunctionService) {
    console.log(this.settings);
  }

  ngOnInit(): void {
  }



}
