import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ConnectComponent } from './connect/connect.component';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import {MatSelectModule} from '@angular/material/select';



import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
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




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderlistComponent,
    AccountsComponent,
    ConnectComponent,
    NotificationComponent,
    SettingsComponent,
    MerchantsComponent,
    MenudashboardComponent,
    MerchantdashboardComponent,
    ChartsComponent,
    LoginComponent,
    PlansComponent,
    ArcherportalComponent,
    LeadersComponent,
    LedgersComponent,
    MerchantinfoComponent,
    BankingComponent,
    ShieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    
    HttpClientModule,
    MatDatepickerModule,
    MatSelectModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
