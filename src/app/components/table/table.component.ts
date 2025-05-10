import { Component, computed, effect, input, output, signal } from '@angular/core';
import { IActions, IColumnDef } from '../../models/general.models';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> {
  columns = input<IColumnDef<T>[]>([]);
  tableData = input<T[]>([]);
  actionClickEmit = output<{action: IActions<T>, rowData: T}>();

  actionClick(action: IActions<T>, rowData: T) {
    this.actionClickEmit.emit({action, rowData});
  }

  // Internal signals
  sortedData = signal<T[]>([]);
  
  constructor() {
    // Initialize sortedData when tableData changes
    effect(() => {
      this.sortedData.set(this.tableData());
    }, { allowSignalWrites: true });
  }

  sort(column: IColumnDef<T>) {
    if (!column.sortable || !column.field) return;
    
    // Reset other columns
    this.columns().forEach(col => {
      if (col !== column && col.sortDirection !== undefined) col.sortDirection = '';
    });

    // Toggle sort direction
    column.sortDirection = column.sortDirection === 'asc' ? 'desc' : 'asc';

    // Sort data
    const sorted = [...this.sortedData()].sort((a, b) => {
      const aVal = a[column.field!];
      const bVal = b[column.field!];
      return column.sortDirection === 'asc' ? 
             aVal > bVal ? 1 : -1 :
             aVal < bVal ? 1 : -1;
    });

    this.sortedData.set(sorted);
  }
}
