import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { CompanyComponent } from "./company/company.component";
import { ResourceComponent } from "./resource/resource.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'res/user', component: UserComponent },
    { path: 'res/user', component: CompanyComponent },
    { path: 'res/resource', component: ResourceComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);