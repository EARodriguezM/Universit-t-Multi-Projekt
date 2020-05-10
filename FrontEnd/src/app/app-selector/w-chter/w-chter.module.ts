import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WChterRoutingModule } from './w-chter-routing.module';
import { WChterComponent } from './w-chter.component';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ECommerceModule } from './pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from './pages/miscellaneous/miscellaneous.module';
import { ThemeModule } from './@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';




@NgModule({
  declarations: [WChterComponent],
  imports: [
    WChterRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ]
})
export class WChterModule { }
