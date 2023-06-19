import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketInfoByIdComponent } from './ticket-info-by-id/ticket-info-by-id.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HomeComponent } from './home/home.component';


const myRoute:Routes=[
  // {
  //   path:"",
  //   component:HomeComponent
  // },
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"viewallcard",
    component:TicketCardComponent
  },
  {
    path:"viewById",
    component:TicketInfoByIdComponent
  },
  {
    path:"orderdetails",
    component:OrderDetailsComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketCardComponent,
    TicketInfoByIdComponent,
    OrderDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
