import { Component, OnInit } from '@angular/core';
import { ColorServiceService } from '../services/color-service.service';

@Component({
  selector: 'app-pasivo',
  templateUrl: './pasivo.component.html',
  styleUrls: ['./pasivo.component.css']
})
export class PasivoComponent implements OnInit {
  color: string;
  constructor(private _colorService: ColorServiceService) { }

  ngOnInit() {
  }
  changeColor() {
    console.log(this.color);
    this._colorService.setColor(this.color);
    console.log(`${this._colorService.setColor(this.color)}`);
  }

}
