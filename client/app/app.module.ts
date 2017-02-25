import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AlertModule } from 'ng2-bootstrap'
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { ResourceComponent } from './resource/resource.component';
import { HomeComponent } from './home/home.component';
import { headerComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

import { AdminComponent } from './admin/admin.component';
import { BussDomainComponent } from "./admin/businessdomain/bussdomain.component";
import { BussDomainInputComponent } from "./admin/businessdomain/bussdomain.input.component";
import { AdminRoleComponent } from "./admin/role/admin.role.component";


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        CompanyComponent,
        ResourceComponent,
        HomeComponent,
        headerComponent,
        FooterComponent,
        AdminComponent,
        BussDomainComponent,
        BussDomainInputComponent,
        AdminRoleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        AlertModule.forRoot(),
        DropdownModule.forRoot(),
        Ng2Bs3ModalModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}