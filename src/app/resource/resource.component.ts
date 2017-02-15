import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceModel } from './resource.model';
import { ResourceService } from './resource.service';
import { AppSettings } from 'app/app.appsettings';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html'
})
export class ResourceComponent implements OnDestroy, OnInit {
  constructor(private resService: ResourceService) { }
  resForm: FormGroup;
  resModel: ResourceModel;
  resTypes: Array<string> = [];
  selectedResTyp: string;
  resStates: Array<string> = [];
  selectedResState: string;

  ngOnInit() {
    this.selectedResState = AppSettings.defaultedDdlText;
    this.selectedResTyp = AppSettings.defaultedDdlText;
    this.resTypes = this.resService.getResTypes();
    this.resStates = this.resService.getResStates();
    this.resForm = new FormGroup({
      resMake: new FormControl(null, Validators.required),
      resModel: new FormControl(null, Validators.required),
      barcode: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
  }

  changeResType(val){
    this.selectedResTyp = val;
  }

  changeResState(val){
    this.selectedResState = val;
  }

  onSubmit(){
    if(this.resForm.value){
      this.resModel = {
        id: String(Math.random()),
        barcode: this.resForm.value.barcode,
        description: this.resForm.value.description,
        make: this.resForm.value.resMake,
        model: this.resForm.value.resModel,
        state: this.selectedResState,
        type: this.selectedResTyp
      }
      this.resService.addResource(this.resModel);
      console.log(this.resService.getResources());
      this.resetForm();
    }
  }

  private resetForm(){
    this.resForm.reset();
    this.selectedResTyp = AppSettings.defaultedDdlText;
    this.selectedResState = AppSettings.defaultedDdlText;
  }

  ngOnDestroy() {
    this.resTypes.length = 0;
    this.resStates.length = 0;
  }

}
