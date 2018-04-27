import { Component, OnInit } from '@angular/core';
import { WSAETIMEDOUT } from 'constants';

@Component({
  selector: 'app-formulariouser',
  templateUrl: './formulariouser.component.html',
  styleUrls: ['./formulariouser.component.css']
})
export class FormulariouserComponent implements OnInit {
 public name: String;
  constructor() { }

  ngOnInit() {
  }

    ValidarUserNameLargoMin(name): boolean {
    if (name.length < 5) {
      return true;
    }
  }
    ValidarUserNameLargoMax(name): boolean {
      if (name.length > 15) {
        return true;
      }
    }

}
