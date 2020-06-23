import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableComponent } from './i-table.component';
import { PaginationContainerComponent } from './pagination-container/pagination-container.component';
import { TableContainerComponent } from './table-container/table-container.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [ITableComponent, PaginationContainerComponent, TableContainerComponent],
  imports: [
    CommonModule
  ],
  providers: [DatePipe],
  exports: [ITableComponent, PaginationContainerComponent, TableContainerComponent]
})
export class ITableModule { }
