import { Routes, RouterModule } from '@angular/router';

import { UniAlicante } from './uniAlicante.component';

import { Parking1 } from './components/parking1/parking1.component';

const routes: Routes = [
  {
    path: '',
    component: UniAlicante,
    children: [
       { path: 'parking1', component: Parking1 },
    ],
    },
];

export const routing = RouterModule.forChild(routes);
