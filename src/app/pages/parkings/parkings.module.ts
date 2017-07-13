
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
//import { DataFilterPipe } from './components/dataTables/data-filter.pipe';
//import { HotTable, HotTableModule } from 'ng2-handsontable';

import { routing } from './parkings.routing';
import { Parkings } from './parkings.component';
import { ParkingsService } from './parkings.service';
import { DataFilterPipe } from './data-filter.pipe';



//import { BasicTables } from './components/basicTables/basicTables.component';
//import { BasicTablesService } from './components/basicTables/basicTables.service';
//import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
//import { StripedTable } from './components/basicTables/components/stripedTable';
//import { BorderedTable } from './components/basicTables/components/borderedTable';
//import { HoverTable } from './components/basicTables/components/hoverTable';
//import { CondensedTable } from './components/basicTables/components/condensedTable';
//import { ContextualTable } from './components/basicTables/components/contextualTable';
//import { DataTables } from './components/dataTables/dataTables.component';
//import { DataTablesService } from './components/dataTables/dataTables.service';

//import { HotTablesComponent } from './components/hotTables/hotTables.component';
//import { HandsontableSectionComponent } from './components/hotTables/handsontable-section';
//import { BasicDemoComponent } from './components/hotTables/handsontable/basic-demo';
//import { SheetDemoComponent } from './components/hotTables/handsontable/sheet-demo';
//import { FinanceDemoComponent } from './components/hotTables/handsontable/finance-demo';
//import { ScienceDemoComponent } from './components/hotTables/handsontable/science-demo';
//import { SportDemoComponent } from './components/hotTables/handsontable/sport-demo';
//import { AdvancedDemoComponent } from './components/hotTables/handsontable/advanced-demo';

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
    //HotTableModule,
  ],
  declarations: [
    Parkings,
    DefaultModal,
    DataFilterPipe,

    ZonaParking1,
    PieChart,
    ChartistJs,

    //BasicTables,
    //HoverTable,
    //BorderedTable,
    //CondensedTable,
    //StripedTable,
    //ContextualTable,
    //ResponsiveTable,
    //DataTables,
    //HandsontableSectionComponent,
    //DataFilterPipe,
    //HotTablesComponent,
    //BasicDemoComponent,
    //AdvancedDemoComponent,
    //FinanceDemoComponent,
    //ScienceDemoComponent,
    //SportDemoComponent,
    //SheetDemoComponent,
  ],
  entryComponents: [
    DefaultModal,
  ],
  providers: [
    ParkingsService,

    PieChartService,
    ChartistJsService,
    //BasicTablesService,
    //DataTablesService,
  ],
})
export class ParkingsModule {
}
