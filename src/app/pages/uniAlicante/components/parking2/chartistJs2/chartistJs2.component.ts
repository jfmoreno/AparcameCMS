import { Component } from '@angular/core';

import { ChartistJsService2 } from './chartistJs2.service';

@Component({
  selector: 'chartist-js2',
  templateUrl: './chartistJs2.html',
  styleUrls: ['./chartistJs2.scss'],
})

export class ChartistJs2 {

  data: any;

  constructor(private _chartistJsService: ChartistJsService2) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
