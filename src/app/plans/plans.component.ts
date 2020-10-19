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
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  
  Tmonth:string;
  Tdate;
  Tyear;
  sample;
  year:number;
  ngOnInit() {
                //console.log(this.currentDate)
                //extracting Tdate
               this.sample= this.currentDate.toString();
               this.Tdate=this.sample.substr(8,2);
               //console.log(this.Tdate);
               this.Tdate=parseInt(this.Tdate);
               
               

                //extracting Tmonth
                this.sample= this.currentDate.toString();
                this.Tmonth=this.sample.substr(4,3);
                

                //extracting Tmonth
                this.sample= this.currentDate.toString();
                this.Tyear=this.sample.substr(11,4);
                this.Tyear=parseInt(this.Tyear);
                
                

                //console.log(this.Tyear.length);
                
                this.showcalender();
                this.Todaydate=this.Tdate+" "+this.Tmonth+" "+this.Tyear; 
                this.tabletitle=this.Todaydate;
                
                

             }

             currentDate=new Date();

             Months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
             Day=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

             flags:number[]=[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


             successtikoption=['1','2','3','4'];
             successtik="";
             successtikflag=false;

             crosstikoption=['1','2','3','4'];
             crosstik="";
             crosstikflag=false;




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
             //
            //Show calender function
            //
            // 
            
            cmonth;
             j;
             index;
             date;
             fulldate;
             changemonthparameter;
            
             showcalender()
            {
               //disabling flags
               for(this.j=0;this.j<31;this.j++)
                {
                  this.flags[this.j]=null;
                }

              
               for(this.cmonth=0;this.cmonth<12;this.cmonth++)
                  {
                    if(this.Tmonth == this.Months[this.cmonth])
                     {
                        this.changemonthparameter=this.cmonth;
                        
                        break;
                     }
                  }

                this.cmonth=this.cmonth+1;

                if(this.cmonth==2)//for feb month
                  {
                   if(this.Tyear %4 ==0)
                    {
                      for(this.j=0;this.j<29;this.j++)
                       {
                         this.flags[this.j]=1;
                         
                       }
                    }
                    else
                     {
                      for(this.j=0;this.j<28;this.j++)
                       {
                          this.flags[this.j]=1;
                          
                       }
                     }

                  }
                else if(this.cmonth<=6 && this.cmonth != 2)
                  {

                    if(this.cmonth%2 ==0)
                      {
                        for(this.j=0;this.j<30;this.j++)
                          {
                            this.flags[this.j]=1;
                            
                          }
                      }
                    else
                      {
                        for(this.j=0;this.j<31;this.j++)
                          {
                            this.flags[this.j]=1;
                            
                          }

                      }
                  }
                 else if(this.cmonth ==7)//for july month
                  {
                    for(this.j=0;this.j<31;this.j++)
                      {
                        this.flags[this.j]=1;
                        
                      }
                  }
                else if(this.cmonth>6 && this.cmonth<=12 && this.cmonth != 7)
                  {   
                    if(this.cmonth%2 == 0)
                      {
                        for(this.j=0;this.j<31;this.j++)
                          {
                            this.flags[this.j]=1;
                           
                          }
                      }
                    else
                      {
                        for(this.j=0;this.j<30;this.j++)
                          {
                            
                            this.flags[this.j]=1;
                           
                          }
                      }
              

                    }



              }
            
            //
            //
            //Show calender function ends here
            //
            // 

            
            //function for printing specific date data
            Todaydate; 
            tabletitle;


            showdata(date)
            {
                this.tabletitle=date+" "+this.Tmonth+" "+this.Tyear;
            }


            //
            //function for changing month
            //
            changemonthprev()
            {
              if(this.changemonthparameter == 0)
              {
                 
                this.changemonthparameter=12;
                this.Tyear--;
              }
              
              this.Tmonth=this.Months[this.changemonthparameter-1];
              this.changemonthparameter=this.changemonthparameter-1;
             
              this.showcalender();
              
              console.log(this.changemonthparameter);
              
            }

            changemonthnext()
            {
              if(this.changemonthparameter == 11)
              {
                 
                this.changemonthparameter=-1;
                this.Tyear++;
              }
              
              this.Tmonth=this.Months[this.changemonthparameter+1];
              this.changemonthparameter=this.changemonthparameter+1;
             
              this.showcalender();
              
              console.log(this.changemonthparameter);
              
            }
            
            //
            //function for changing month Ends here
            //


            //
            //function for changing css class
            //

            css="Cdate";

            // 
            //table
            //
            displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
            dataSource = ELEMENT_DATA;


}
