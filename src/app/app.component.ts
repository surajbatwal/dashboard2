import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
        this.navigation(1);
  }

  title = 'dashboard1';

  opened=true;
constructor(public router:Router)
{}


//routing task
Dashboard=false;
Merchants=false;
Orderhistory=false;
Menudashboard=false;
Merchantdashboard=false;
Accounts=false;
Charts=false;
Notification=false;
Login=false;
Connect=false;
Plans=false;
Archerportal=false;
Leaders=false;
Ledgers=false;
Merchantinfo=false;
Banking=false;
Shield=false;

  navigation(route)
  {
    if(route == 1)
    {
      console.log("in")
      this.Dashboard=true;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 2)
    {
      console.log("in")
      this.Dashboard=false;
      this.Merchants=true;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 3)
    {
      console.log("in")
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=true;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }

    if(route == 4)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=true;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 5)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=true;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 6)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=true;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 7)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=true;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 8)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=true;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 9)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=true;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 10)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=true;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 11)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=true;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 12)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=true;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 13)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=true;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 14)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=true;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 15)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=true;
      this.Banking=false;
      this.Shield=false;

    }
    if(route == 16)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=true;
      this.Shield=false;

    }
    if(route == 17)
    {
      this.Dashboard=false;
      this.Merchants=false;
      this.Orderhistory=false;
      this.Menudashboard=false;
      this.Merchantdashboard=false;
      this.Accounts=false;
      this.Charts=false;
      this.Notification=false;
      this.Login=false;
      this.Connect=false;
      this.Plans=false;
      this.Archerportal=false;
      this.Leaders=false;
      this.Ledgers=false;
      this.Merchantinfo=false;
      this.Banking=false;
      this.Shield=true;

    }

  }
 
}
