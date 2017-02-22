import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { CompanyComponent } from "./company/company.component";
import { ResourceComponent } from "./resource/resource.component";

import { AdminComponent } from "./admin/admin.component";
import { ADMIN_ROUTES } from "./admin/admin.route";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'resource', component: ResourceComponent },
    { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);