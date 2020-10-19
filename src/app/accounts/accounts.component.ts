import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '1200', weight: 1, symbol: '10-10-2'},
  {position: 2, name: '2300', weight: 1, symbol: '09-10-2020'},
  {position: 3, name: '500', weight: 1, symbol: '06-10-2020'},
  {position: 4, name: '500', weight: 1, symbol: '11-10-2020'},
  {position: 5, name: '8000', weight: 1, symbol: '12-10-2020'},
  
];


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor() { }

  

   ngOnInit() 
      {
      
      }
      Incoming=100;
      Total=200;
            // 
            //table
            //
            displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
            dataSource = ELEMENT_DATA;


}
