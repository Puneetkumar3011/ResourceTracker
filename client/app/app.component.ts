import { Component, Input, ElementRef } from '@angular/core';
import { ResourceService } from './resource/resource.service';
import { UserService } from './user/user.service';
import { CompanyService } from './company/company.service';
import { BussDomainService } from "./admin/businessdomain/bussdomain.service";

@Component({
  selector: 'resource-root',
  templateUrl: './app.component.html',
  providers: [ResourceService, UserService, CompanyService, BussDomainService]
})
export class AppComponent {
  title = 'app component';
  appReqType: string;
  constructor(private eltRef:ElementRef){
    this.appReqType = eltRef.nativeElement.getAttribute('appReqType'); 
  }
}
