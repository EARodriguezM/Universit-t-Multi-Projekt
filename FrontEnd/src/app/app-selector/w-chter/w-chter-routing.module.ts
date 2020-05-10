import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WChterComponent } from './w-chter.component';

const routes: Routes = [{ path: '', component: WChterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WChterRoutingModule { }
