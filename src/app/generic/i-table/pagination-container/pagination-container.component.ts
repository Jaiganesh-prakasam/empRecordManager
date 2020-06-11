import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-container',
  templateUrl: './pagination-container.component.html',
  styleUrls: ['./pagination-container.component.scss']
})
export class PaginationContainerComponent implements OnInit, AfterViewInit {
  @Input()pagnationTotalSize: any;
  @Input()numberOfRows: any;
  @Output()itemFromTo = new EventEmitter();
  totalDivisions = [1];
  constructor() {
    console.log(this.pagnationTotalSize);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    (document.getElementById('rows') as HTMLInputElement).value = this.numberOfRows;
    this.valueChanged(this.numberOfRows);
  }

  valueChanged(tempNumberOfRows: number) {
    // tempNumberOfRows
    console.log(tempNumberOfRows);
  }

}
