import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ITableSharedFunctionService {
  uuid = uuidv4();
  constructor(private datePipe: DatePipe) { }
  mutiValueCombination(
    data: object,
    fieldArray: string[][],
    type?: string,
    callBack?: (para: string) => string
  ): string {
    let displayStringArray = [];
    displayStringArray = fieldArray.map(element => {
      return this.getValue(data, element);
    });
    // formatting date in MM-dd-yyyy from yyyy-MM0dd
    if (type === 'date') {
      return this.datePipe.transform(displayStringArray[0], 'MM-dd-yyyy');
    }
    // to execute call back function passed
    if (callBack) {
      return callBack(displayStringArray[0]);
    }
    return displayStringArray.join(' ');
  }
  getValue(data: object , fieldArray: string[]): any | string {
    const tempfieldArray = [...fieldArray];
    if (data[fieldArray[0]]) {
      if (fieldArray.length > 1 ) {
        const dataForRecursion = data[fieldArray[0]];
        tempfieldArray.shift();
        return this.getValue( dataForRecursion, tempfieldArray);
      } else {
        return data[fieldArray[0]] + '';
      }
    }
  }
}
