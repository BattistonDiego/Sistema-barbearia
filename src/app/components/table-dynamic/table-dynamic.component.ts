import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { dataTable } from 'src/app/interfaces/funcionario.model';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.css'],
})
export class TableDynamicComponent implements OnChanges {
  @Input() displayedColumns: string[] = [];
  @Input() columns: { key: string; header: string }[] = [];
  @Input() dataSource!: MatTableDataSource<any> | any[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'].firstChange == false) {
      this.displayedColumns = this.columns.map((c) => c.key);
    }
  }
}
