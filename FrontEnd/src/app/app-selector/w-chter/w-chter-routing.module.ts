import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WChterComponent } from './w-chter.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { NotFoundComponent } from './pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: WChterComponent,
    children:
    [
      {
        path: 'dashboard',
        component: ECommerceComponent,
      },
      {
        path: 'iot-dashboard',
        component: DashboardComponent,
      },
      {
        path: 'layout',
        loadChildren: () => import('./pages/layout/layout.module')
          .then(m => m.LayoutModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./pages/forms/forms.module')
          .then(m => m.FormsModule),
      },
      {
        path: 'ui-features',
        loadChildren: () => import('./pages/ui-features/ui-features.module')
          .then(m => m.UiFeaturesModule),
      },
      {
        path: 'modal-overlays',
        loadChildren: () => import('./pages/modal-overlays/modal-overlays.module')
          .then(m => m.ModalOverlaysModule),
      },
      {
        path: 'extra-components',
        loadChildren: () => import('./pages/extra-components/extra-components.module')
          .then(m => m.ExtraComponentsModule),
      },
      {
        path: 'charts',
        loadChildren: () => import('./pages/charts/charts.module')
          .then(m => m.ChartsModule),
      },
      {
        path: 'editors',
        loadChildren: () => import('./pages/editors/editors.module')
          .then(m => m.EditorsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./pages/tables/tables.module')
          .then(m => m.TablesModule),
      },
      {
        path: 'miscellaneous',
        loadChildren: () => import('./pages/miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WChterRoutingModule {}
