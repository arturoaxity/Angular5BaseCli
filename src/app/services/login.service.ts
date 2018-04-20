import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceUser {

  constructor() {}

    validarUsuario(name: string, contrasena: string): boolean {
      return  (name === 'arturo' && contrasena === 'bravo' );
      }
}
