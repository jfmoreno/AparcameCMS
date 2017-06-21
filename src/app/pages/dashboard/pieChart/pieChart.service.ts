import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.usuarios_totales',
        stats: '5.000',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.parkings',
        stats: '5',
        icon: 'parkings',
      }, {
        color: pieColor,
        description: 'dashboard.plazas_totales',
        stats: '10.000',
        icon: 'plazastotales',
      }, {
        color: pieColor,
        description: 'dashboard.plazas_libres',
        stats: '700',
        icon: 'plazaslibres',
      },
    ];
  }
}
