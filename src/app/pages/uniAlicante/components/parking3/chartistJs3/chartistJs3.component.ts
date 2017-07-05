import { Component } from '@angular/core';

import { ChartistJsService3 } from './chartistJs3.service';

@Component({
  selector: 'chartist-js3',
  templateUrl: './chartistJs3.html',
  styleUrls: ['./chartistJs3.scss'],
})

export class ChartistJs3 {

  data: any;

  constructor(private _chartistJsService: ChartistJsService3) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
