import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BussDomainService } from "./bussdomain.service";
declare var jQuery:any;

@Component({
    selector: 'buss-domain-list',
    templateUrl: './bussdomain.component.html'
})
export class BussDomainComponent implements OnInit{
    constructor(public bussDomainSvc: BussDomainService){} 
    bussDomains: Array<any> = [];
    @ViewChildren (ModalComponent)
    //modals: QueryList<ModalComponent>; // How to access a collection of modals

    ngOnInit(){
        this.getBussDomain();
    }

    private getBussDomain(){
      this.bussDomainSvc.getBussDomain()
        .subscribe(
            (res: any[]) => {
                var domain = {};
                this.bussDomains = res; 
            }
        ); 
    }

    public updateDomain(bussDomain: any, modal: ModalComponent) : void{
        if(bussDomain && bussDomain.id){
        this.bussDomainSvc.updateBussDomain(bussDomain).subscribe(
                    function (result) { 
                        modal.close(); 
                    }
                );
        } else{
        this.bussDomainSvc.addBussDomain(bussDomain).subscribe(
                    function (result) { 
                        modal.close(); 
                    }
                );
        }
    }

    public onBussDomainDelete(bussDomain: any) : void{
        this.bussDomainSvc.deleteBussDomain(bussDomain)
            .subscribe(function(result){
                console.log(result);
            });
    }

}