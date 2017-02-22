import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BussDomainService } from "./bussdomain.service";

@Component({
    selector: 'buss-domain',
    templateUrl: './bussdomain.input.component.html'
})
export class BussDomainInputComponent implements OnInit{
    constructor(private bussDomainSvc: BussDomainService){}
    bussDomForm: FormGroup;
    bussDomains: Array<any> = [];

    ngOnInit(){
        this.bussDomForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required)
    });
    }

    onSubmit(){
      console.log('Data logged');
    if(this.bussDomForm.value){
      var bussDomain = {
        description: this.bussDomForm.value.description,
        name: this.bussDomForm.value.name
      };
      this.bussDomainSvc.addBussDomain(bussDomain).subscribe(
                    result => console.log(result)
                );
    }
  }

}