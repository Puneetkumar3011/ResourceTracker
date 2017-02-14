import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { AlertModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { ResourceComponent } from './resource/resource.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CompanyComponent,
    ResourceComponent,
    HomeComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
