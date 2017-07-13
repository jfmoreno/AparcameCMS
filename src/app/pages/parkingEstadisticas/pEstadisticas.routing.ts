import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PEstadisticas } from './pEstadisticas.component';

//import { Parking1 } from './parking1/parking1.component';


const routes: Routes = [
  {
    path: '',
    component: PEstadisticas,
    children: [
       //{ path: 'parking1', component: Parking1 },

    ],
    },
];

export const routing = RouterModule.forChild(routes);
