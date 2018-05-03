import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';
import {RegisterService} from '../services/register-service';
import {register} from 'ts-node';
import {RegisterModel} from '../model/register-model';

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

  constructor(public fb: FormBuilder, public router: Router, private registerperson: RegisterService) {
    this.formUser = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      usuario: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      confPassword: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      email: ['', [Validators.required, Validators.email]],
      checked: ['', [Validators.requiredTrue]]
    }, { validator: confirmarPassword });
  }
  ngOnInit() {
  }
  saveData(): boolean {
    if (this.formUser.status !== 'VALID') {
      console.log('esta mal');
      return false;
    }
    this.consumirRest();
     this.router.navigate(['']);
    return true;
  }
  consumirRest() {
    const personaformulario = new RegisterModel();
    personaformulario.userName = this.formUser.get('userName').value;
    personaformulario.nombre = this.formUser.get('usuario').value;
    personaformulario.password = this.formUser.get('password').value;
    personaformulario.confPassword = this.formUser.get('confPassword').value;
    personaformulario.email = this.formUser.get('email').value;
    personaformulario.terminosCondiciones = this.formUser.get('checked').value;
    this.registerperson.addPerson(personaformulario);
  }

}

