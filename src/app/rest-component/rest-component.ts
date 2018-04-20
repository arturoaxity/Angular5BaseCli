
import { Component, OnInit, OnDestroy, style } from '@angular/core';
import { PersonaRest } from '../model/rest-model';
// tslint:disable-next-line:import-blacklist
import { Observable , Observer } from 'rxjs';
import { Button } from 'protractor';
@Component({
    selector: 'app-rest-component',
    templateUrl: './rest-component.html',
    styleUrls: ['./rest-component.css']
})

// tslint:disable-next-line:component-class-suffix
export class RestComponente implements OnInit, OnDestroy {
newPerson: PersonaRest;
constructor () {
this.newPerson = new PersonaRest();
this.newPerson.name = 'Arturo | jonatan';
this.newPerson.apellido = 'perez';
this.newPerson.edad = 54;
}

    ngOnDestroy() {

    }
    ngOnInit() {

    }
}
