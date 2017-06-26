import { ZonaParking1 } from './components/parking1/zonaParking1/leafletMaps.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './uniAlicante.routing';
import { UniAlicante } from './uniAlicante.component';
import { Parking1 } from './components/parking1/parking1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing,
  ],
  declarations: [
    UniAlicante,
    Parking1,
    ZonaParking1,

  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class UniAlicanteModule {
}

