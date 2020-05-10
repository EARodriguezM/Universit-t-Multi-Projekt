import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRankingRoutingModule } from './teachers-ranking-routing.module';
import { TeachersRankingComponent } from './teachers-ranking.component';


@NgModule({
  declarations: [TeachersRankingComponent],
  imports: [
    CommonModule,
    TeachersRankingRoutingModule
  ]
})
export class TeachersRankingModule { }
