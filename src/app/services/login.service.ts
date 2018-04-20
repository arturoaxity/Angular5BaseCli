import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceUser {

    constructor() {}

    validarUsuario(name: string, contrasena: string) {
      const result: string = name === 'artur' && contrasena === 'perez' ? 'bien' : 'mal' ;
      console.log(`jsdkjdskdj ${result}`);
    }
}
