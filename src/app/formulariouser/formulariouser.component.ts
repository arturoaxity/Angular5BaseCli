import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';


function confirmarPassword(a: AbstractControl) {
  return a.get('password').value === a.get('confPassword').value ? null : {nomach: true };
 }
@Component({
  selector: 'app-formulariouser',
  templateUrl: './formulariouser.component.html',
  styleUrls: ['./formulariouser.component.css']
})
export class FormulariouserComponent implements OnInit {
 public formUser: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.formUser = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      usuario: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      confPassword: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      email: ['', [Validators.required, Validators.email]]
    }, {validator: confirmarPassword});
  }
  ngOnInit() {
  }
  saveData(): boolean {
    if (this.formUser.status !==  'VALID') {
      return false;
    }
    this.router.navigate(['']);
    console.log(this.formUser.status);
    return true;
  }
/*this.formUser.get('userName').status === 'VALID'
    &&  this.formUser.get('usuario').status === 'VALID'
    &&  this.formUser.get('password').status === 'VALID'
    &&  this.formUser.get('confPassword').status === 'VALID'
    &&  this.formUser.get('email').status === 'email') */
}

