import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  constructor(private userSvc: UserService) { }
  userForm: FormGroup;
  user: UserModel;

  ngOnInit() {
    this.userForm = new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, Validators.required),
          confirmPassword: new FormControl(null, Validators.required),
          dob: new FormControl(null, Validators.required),
          company: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if(this.userForm.value){
        this.user = {
          company: this.userForm.value.company,
          dob: this.userForm.value.dob,
          email: this.userForm.value.email,
          firstName: this.userForm.value.firstName,
          id: String(Math.random()),
          lastName: this.userForm.value.lastName,
          password: this.userForm.value.password
        };
        this.userSvc.addUser(this.user);
        console.log(this.userSvc.getUserList());
        this.userForm.reset();
    }
  }


}