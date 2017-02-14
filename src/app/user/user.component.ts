import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }
  userForm: FormGroup;

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
        console.log(this.userForm);
        this.userForm.reset();
    }

}
