import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WChterRoutingModule } from './w-chter-routing.module';
import { WChterComponent } from './w-chter.component';


@NgModule({
  declarations: [WChterComponent],
  imports: [
    CommonModule,
    WChterRoutingModule
  ]
})
export class WChterModule { }
