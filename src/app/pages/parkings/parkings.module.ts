
import { PieChart } from './default-modal/pieChart1/pieChart.component';
import { ZonaParking1 } from './default-modal/zonaParking1/leafletMaps.component';
import { ChartistJs } from './default-modal/chartistJs1/chartistJs.component';
import { PieChartService } from './default-modal/pieChart1/pieChart.service';
import { ChartistJsService } from './default-modal/chartistJs1/chartistJs.service';


import { DefaultModal } from './default-modal/default-modal.component';
import { NgbModalModule, NgbDropdownModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';

import { routing } from './parkings.routing';
import { Parkings } from './parkings.component';
import { ParkingsService } from './parkings.service';
import { DataFilterPipe } from './data-filter.pipe';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPopoverModule,
    DataTableModule,
  ],

  declarations: [
    Parkings,
    DefaultModal,
    DataFilterPipe,

    ZonaParking1,
    PieChart,
    ChartistJs,
  ],

  entryComponents: [
    DefaultModal,
  ],

  providers: [
    ParkingsService,
    PieChartService,
    ChartistJsService,
  ],

})
export class ParkingsModule {
}
