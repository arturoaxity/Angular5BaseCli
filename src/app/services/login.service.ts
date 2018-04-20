import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceUser {

  constructor() {}

    validarUsuario(name: string, contrasena: string): boolean {
      const result: boolean = name === 'artur' && contrasena === 'perez' ? true
       : false ;
    return result;
      }
}
