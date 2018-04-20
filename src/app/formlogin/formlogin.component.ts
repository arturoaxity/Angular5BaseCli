import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginServiceUser } from '../services/login.service';


@Component({
    selector: 'app-formlogin',
    templateUrl: './formlogin.component.html',
    styleUrls: ['./formlogin.component.css']
})

export class FormLoginComponent implements OnInit{
    private nombre;
    private contracena;
    constructor(private _logComponent: LoginServiceUser) { }
    ngOnInit(): void {

    }
    validarUser() {
        this._logComponent.validarUsuario(this.nombre, this.contracena);
    }

}
