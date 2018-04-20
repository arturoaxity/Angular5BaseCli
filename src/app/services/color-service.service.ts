import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';

@Injectable()
export class ColorServiceService {
private color = new Subject<string>();
  constructor() { }

  setColor(newcolor: string) {
  this.color.next(newcolor);
  }
  getEventColor() {
    return this.color.asObservable();
  }
}
