import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSelectorComponent } from './app-selector.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppSelectorComponent 
  },
  { 
    path: 'app-routing', 
    loadChildren: () => import('./w-chter/w-chter.module')
    .then(m => m.WChterModule) 
  },
  { 
    path: 'app-routing', 
    loadChildren: () => import('./teachers-ranking/teachers-ranking.module')
    .then(m => m.TeachersRankingModule) 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppSelectorRoutingModule { }
