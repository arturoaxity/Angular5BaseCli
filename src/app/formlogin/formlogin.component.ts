import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginServiceUser } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'app-formlogin',
    templateUrl: './formlogin.component.html',
    styleUrls: ['./formlogin.component.css']
})

export class FormLoginComponent implements OnInit {
    private nombre;
    private contracena;
    constructor(private _logComponent: LoginServiceUser, private router: Router, public snackBar: MatSnackBar) { }
    ngOnInit(): void {

    }
    validarUser() {
        const mensage = 'Datos incorrectos';
        const event = 'ok';
        const result: any =
        this._logComponent.validarUsuario(this.nombre, this.contracena)
                 ? this.router.navigate(['']) : this.snackBar.open(mensage, event, {
                    duration: 3000,
                });
         this.nombre = '';
         this.contracena = '';
        }

}
