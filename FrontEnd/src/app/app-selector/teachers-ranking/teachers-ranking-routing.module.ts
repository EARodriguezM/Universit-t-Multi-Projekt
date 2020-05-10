import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersRankingComponent } from './teachers-ranking.component';

const routes: Routes = [{ path: '', component: TeachersRankingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRankingRoutingModule { }
