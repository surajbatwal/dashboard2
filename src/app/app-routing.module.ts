import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ConnectComponent } from './connect/connect.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { MenudashboardComponent } from './menudashboard/menudashboard.component';
import { MerchantdashboardComponent } from './merchantdashboard/merchantdashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { ArcherportalComponent } from './archerportal/archerportal.component';
import { LeadersComponent } from './leaders/leaders.component';
import { LedgersComponent } from './ledgers/ledgers.component';
import { MerchantinfoComponent } from './merchantinfo/merchantinfo.component';
import { BankingComponent } from './banking/banking.component';
import { ShieldComponent } from './shield/shield.component';

const routes: Routes = 
[
  {path : 'dashboard', component:DashboardComponent},
  {path : 'orderlist', component:OrderlistComponent},
  {path : 'accounts', component:AccountsComponent},
  {path : 'connect', component:ConnectComponent},
  {path : 'notification', component:NotificationComponent},
  {path : 'settings', component:SettingsComponent},
  {path : 'merchants', component:MerchantsComponent},
  {path : 'menudashboard', component:MenudashboardComponent},
  {path : 'merchantdashboard', component:MerchantdashboardComponent},
  {path : 'charts', component:ChartsComponent},
  {path : 'login', component:LoginComponent},
  {path : 'plans', component:PlansComponent},
  {path : 'archerportal', component:ArcherportalComponent},
  {path : 'leaders', component:LeadersComponent},
  {path : 'ledgers', component:LedgersComponent},
  {path : 'merchantinfo', component:MerchantinfoComponent},
  {path : 'banking', component:BankingComponent},
  {path : 'shield', component:ShieldComponent},

  







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
