import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {
  @Input() tableData: any;
  @Input() settings: any;
  @Input() start: number;
  @Input() end: number;
  constructor() {
    console.log(this.settings);
  }

  ngOnInit(): void {
  }

  getValue(data , fieldArray): any | string {
    // console.log(data, fieldArray);
    const tempfieldArray = [...fieldArray];
    if (data[fieldArray[0]]) {
      if (fieldArray.length > 1 ) {
        const dataForRecursion = data[fieldArray[0]];
        tempfieldArray.shift();
        return this.getValue( dataForRecursion, tempfieldArray);
      } else {
        // console.log('i am returned', data[fieldArray[0]]);
        return data[fieldArray[0]] + '';
      }
    }
  }

}
