import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'parkings', loadChildren: './parkings/parkings.module#ParkingsModule' },
      { path: 'pEstadisticas', loadChildren: './parkingEstadisticas/pEstadisticas.module#PEstadisticasModule' },
      { path: 'uniAlicante', loadChildren: './uniAlicante/uniAlicante.module#UniAlicanteModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      //{ path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      //{ path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      //{ path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
    ],
  },
    /*
    {
      path: 'login',
      loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
      path: 'register',
      loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
  */
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
