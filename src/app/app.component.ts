import { Component } from '@angular/core';
import { ResourceService } from './resource/resource.service';
import { UserService } from './user/user.service';
import { CompanyService } from './company/company.service';

@Component({
  selector: 'property-root',
  templateUrl: './app.component.html',
  providers: [ResourceService, UserService, CompanyService]
})
export class AppComponent {
  title = 'app component';
}
