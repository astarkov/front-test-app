import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegForm1Component } from './reg-form1/reg-form1.component';
import { RegForm2Component } from './reg-form2/reg-form2.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataServiceService} from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegForm1Component,
    RegForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
