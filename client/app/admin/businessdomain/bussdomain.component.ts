import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BussDomainService } from "./bussdomain.service";

@Component({
    selector: 'buss-domain',
    templateUrl: './bussdomain.component.html'
})
export class BussDomainComponent implements OnInit{
    constructor(private bussDomainSvc: BussDomainService){}
    bussDomains: Array<any> = [];

    ngOnInit(){
        this.getBussDomain();
    }

    private getBussDomain(){
      this.bussDomainSvc.getBussDomain()
        .subscribe(
            (res: any[]) => {
                this.bussDomains = res;
            }
        ); 
    }

}