import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 1500,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: '+51',
        percentage: 30,
        order: 1,
      }, {
        value: 1000,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Entre 33 y 50',
        percentage: 20,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Entre 26 y 32',
        percentage: 20,
        order: 3,
      }, {
        value: 500,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Entre 22 y 25',
        percentage: 10,
        order: 2,
      }, {
        value: 1000,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'entre 18 y 21',
        percentage: 20,
        order: 0,
      },
    ];
  }
}
