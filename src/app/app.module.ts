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
import { headerComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CompanyComponent,
    ResourceComponent,
    HomeComponent,
    headerComponent,
    FooterComponent
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
