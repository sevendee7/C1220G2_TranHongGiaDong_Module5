import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public register: FormGroup;
  public pwGroup: FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada', 'Viet Nam', 'Japan'];
  constructor() {}

  ngOnInit() {
    this.register = new FormGroup( {
      email: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('')
      }, {validators: this.comparePassword}),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('',[Validators.required, this.validateAge18]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')])
    })
  }

  validateAge18(dateOfBirthControl: AbstractControl): any {
    let ageFromForm = dateOfBirthControl.value;
    let year = Number(ageFromForm.substr(0,4));
    let currentYear = new Date().getFullYear();

    return currentYear - year >= 18 ? null : {'invalid18': true};
  }

  comparePassword(c : AbstractControl) {
    const v = c.value;
    console.log("test");
    return (v.password === v.confirmPassword) ?
      null : {
      passwordnotmatch: true
    } ;
  }

}
