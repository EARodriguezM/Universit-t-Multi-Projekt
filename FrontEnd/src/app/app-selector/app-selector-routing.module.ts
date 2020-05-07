import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSelectorComponent } from './app-selector.component';

const routes: Routes = [{ path: '', component: AppSelectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSelectorRoutingModule { }
