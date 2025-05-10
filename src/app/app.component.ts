import { Component } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import { COLUMN_DEFINITIONS } from './constants/general.constants';
import { IUser } from './models/general.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-table-control';
  columns= COLUMN_DEFINITIONS;
  tableData:IUser[] = [
    {name: 'Kapil', email:'kapilkumar0037@gmail.com', role:'user', status:'inactive'},
    {name: 'Kapil1', email:'kapilkumar0038@gmail.com', role:'admin', status:'active'},

];
}
