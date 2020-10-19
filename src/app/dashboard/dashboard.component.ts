import { Component, OnInit } from '@angular/core';



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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{

   constructor() { }

    ngOnInit(): void
     {
     }

    Incoming=100;
    Total=200;

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
    dataSource = ELEMENT_DATA;

              successtikoption=['1','2','3','4'];
              successtik="";
              successtikflag=false;

              crosstikoption=['1','2','3','4'];
              crosstik="";
              crosstikflag=false;


            //
            //show option fucntion for selecttik and crosstik in table (in Action cell) 
            //
             showoptions(no)
             {
               if(no == 1)
               {
                 if(this.successtikflag == true)
                  {
                    this.successtikflag=false;
                  }
                 else
                  {
                    this.successtikflag=true;
                    this.crosstikflag=false;

                  }
               }

              if(no == 2)
               {
                 
                   if(this.crosstikflag == true)
                      {
                        this.crosstikflag=false;
                      }
                  else
                      {
                        this.crosstikflag=true;
                        this.successtikflag=false;
                      }
               }

             }
             //
            //show option fucntion Ends Here
            //


             tabletitle="";

             Tabletitle(choice)
             {
                if(choice == "1")
                  {
                    this.tabletitle="Incoming Orders Real Time Updates";
                  }

                  if(choice == "2")
                  {
                    this.tabletitle="Packed Orders Real Time Updates";
                  }

                  if(choice == "3")
                  {
                    this.tabletitle="Issues";
                  }

                  if(choice == "4")
                  {
                    this.tabletitle="Outdated Items";
                  }

             }

}//main function ending
