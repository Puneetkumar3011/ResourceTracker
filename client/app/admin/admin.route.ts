import { Routes, RouterModule } from "@angular/router";

import { BussDomainComponent } from "./businessdomain/bussdomain.component";
import { AdminRoleComponent } from "./role/admin.role.component";
export const ADMIN_ROUTES: Routes = [
        {  path: 'bussdomain', component: BussDomainComponent },
        { path: 'adminrole', component: AdminRoleComponent }
    ];