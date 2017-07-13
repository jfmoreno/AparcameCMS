import { Injectable } from '@angular/core';

import { BaThemeConfigProvider } from '../../../../theme';

@Injectable()
export class ChartistJsService2 {

  private _data = {

    

    stackedBarData: {
      labels: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      series: [
        //Hasta 60
        [5, 0, 0, 0, 0, 3, 3],
        //de 61 a 120
        [0, 0, 10, 0, 11, 0, 0],
        //Encima de 120
        [0, 18, 0, 16, 0, 0, 0],
      ],
    },
    stackedBarOptions: {
      height: '300px',
      fullWidth: true,
      high: 20,
      stackBars: true, //Agrupar todo en una barra
    },    
  };

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        },
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        },
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      }],
    ];
  }
}
