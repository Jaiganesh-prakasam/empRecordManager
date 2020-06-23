import { Injectable } from '@angular/core';

@Injectable()
export class ITableSharedFunctionService {

  constructor() { }
  mutiValueCombination(data: object , fieldArray: string[][]): string {
    let displayStringArray = [];
    displayStringArray = fieldArray.map(element => {
      return this.getValue(data, element);
    });
    return displayStringArray.join(' ');
  }
  getValue(data: object , fieldArray: string[]): any | string {
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
