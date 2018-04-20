import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginServiceUser } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-formlogin',
    templateUrl: './formlogin.component.html',
    styleUrls: ['./formlogin.component.css']
})

export class FormLoginComponent implements OnInit {
    private nombre;
    private contracena;
    constructor(private _logComponent: LoginServiceUser, private router: Router) { }
    ngOnInit(): void {

    }
    validarUser() {
        console.log(`${this.nombre} ${this.contracena}`);
        const result: any =
        this._logComponent.validarUsuario(this.nombre, this.contracena)
         === true ? this.router.navigate(['']) : alert('Datos incorrectos');
    }

}
