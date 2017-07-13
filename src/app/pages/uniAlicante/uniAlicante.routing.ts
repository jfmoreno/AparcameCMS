import { Routes, RouterModule } from '@angular/router';

import { UniAlicante } from './uniAlicante.component';

import { Parking1 } from './parking1/parking1.component';
import { Parking2 } from './parking2/parking2.component';
import { Parking3 } from './parking3/parking3.component';

/*import { Parking4 } from './components/parking4/parking4.component';
import { Parking5 } from './components/parking5/parking5.component';
import { Parking6 } from './components/parking6/parking6.component';
import { Parking7 } from './components/parking7/parking7.component';
import { Parking8 } from './components/parking8/parking8.component';
import { Parking9 } from './components/parking9/parking9.component';
import { Parking10 } from './components/parking10/parking10.component';
import { Parking11 } from './components/parking11/parking11.component';
import { Parking12 } from './components/parking12/parking12.component';*/

const routes: Routes = [
  {
    path: '',
    component: UniAlicante,
    children: [
       { path: 'parking1', component: Parking1 },
        { path: 'parking2', component: Parking2 },
        { path: 'parking3', component: Parking3 },
        /*{ path: 'parking4', component: Parking4 },
        { path: 'parking5', component: Parking5 },
        { path: 'parking6', component: Parking6 },
        { path: 'parking7', component: Parking7 },
        { path: 'parking8', component: Parking8 },
        { path: 'parking9', component: Parking9 },
        { path: 'parking10', component: Parking10 },
        { path: 'parking11', component: Parking11 },
        { path: 'parking12', component: Parking12 },*/
    ],
    },
];

export const routing = RouterModule.forChild(routes);
