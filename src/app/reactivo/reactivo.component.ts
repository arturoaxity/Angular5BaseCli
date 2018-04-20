import { Component, OnInit } from '@angular/core';
import { ColorServiceService } from '../services/color-service.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
// tslint:disable-next-line:no-inferrable-types
  newColor: string = '#64B5F6';
  constructor(private _colorService: ColorServiceService) { }

  ngOnInit() {
  this._colorService.getEventColor().subscribe(value => this.newColor = value);
  }

}
