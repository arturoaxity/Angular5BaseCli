import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RegisterModel} from '../model/register-model';
import {Observable} from 'rxjs/Observable';

const _getUsersUrls = 'http://Admin-THINK:7001/scheduler-web/resources/angular/register';
@Injectable()
export class RegisterService {
  constructor(private _httpClient: HttpClient) {

  }
  addPerson(person: RegisterModel) {
     this._httpClient.post(_getUsersUrls, person)
     .subscribe(x => {
      console.log(x);
    });
  }


}

