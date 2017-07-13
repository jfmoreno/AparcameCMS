import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../../theme';

@Injectable()
export class PieChartService3 {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    // tslint:disable-next-line:prefer-const
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
       {
        color: pieColor,
        description: 'Plazas Totales',
        stats: '2000',
        icon: 'plazastotales',
      }, {
        color: pieColor,
        description: 'Plazas Libres',
        stats: '150 / 2000',
        icon: 'plazaslibres',
      }, {
        color: pieColor,
        description: 'Plazas Adaptadas',
        stats: '8 / 10',
        icon: 'minusvalido',
      }, {
        color: pieColor,
        description: 'Plazas Electricas',
        stats: '0 / 1',
        icon: 'electricos',
      },
    ];
  }
  
}
