import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BussDomainService } from "./bussdomain.service";
declare var jQuery:any;

@Component({
    selector: 'buss-domain-input',
    templateUrl: './bussdomain.input.component.html'
})
export class BussDomainInputComponent implements OnInit{
    constructor(private bussDomainSvc: BussDomainService){}
    bussDomForm: FormGroup;
    bussDomains: Array<any> = [];
    @Input() bussdata: any;

    ngOnInit(){
        this.bussDomForm = new FormGroup({
          id: new FormControl(this.bussdata ? this.bussdata.id : null),
          name: new FormControl(this.bussdata ? this.bussdata.name : null, Validators.required),
          description: new FormControl(this.bussdata ? this.bussdata.description : null, Validators.required)
      });
    }

    onSubmit(){
      console.log('Data logged');
    if(this.bussDomForm.value){
      var bussDomain = {
        id: this.bussDomForm.value.id,
        description: this.bussDomForm.value.description,
        name: this.bussDomForm.value.name
      };
      if(bussDomain.id){
        this.bussDomainSvc.addBussDomain(bussDomain).subscribe(
                    function (result) { 
                      return jQuery('.modal-dialog').modal("hide"); 
                    }
                );
      } else{
        this.bussDomainSvc.addBussDomain(bussDomain).subscribe(
                    function (result) { 
                      return jQuery('.modal-dialog').modal("hide"); 
                    }
                );
      }
      
    }
  }

}