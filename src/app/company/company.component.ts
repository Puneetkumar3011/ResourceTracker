import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyModel } from './company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnDestroy, OnInit {
  constructor(private compSvc: CompanyService) { }
  compForm: FormGroup;
  busiDomains: Array<string>;
  defaultDdlVal: string = '--- Select ---';
  selectedBussDomain: string;
  company: CompanyModel;

  ngOnInit() {
    this.selectedBussDomain = this.defaultDdlVal;
    this.busiDomains = this.compSvc.getBussDomains();
    this.compForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      logo: new FormControl(null, Validators.required)
    });
  }

  changeBussDomain(val){
    this.selectedBussDomain = val;
  }

  onSubmit(){
    if(this.compForm.value){
      this.company = {
        description: this.compForm.value.description,
        id: String(Math.random()),
        location: this.compForm.value.location,
        logo: this.compForm.value.logo,
        name: this.compForm.value.name
      };
      this.compSvc.addCompany(this.company);
      this.resetForm();
    }
  }

  resetForm(){
      this.selectedBussDomain = this.defaultDdlVal;
      this.compForm.reset();
      console.log(this.compSvc.getCompanies());
  }

  ngOnDestroy() {
    this.busiDomains.length = 0;
  }

}
