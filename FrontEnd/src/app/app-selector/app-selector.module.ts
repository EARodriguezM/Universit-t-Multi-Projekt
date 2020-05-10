import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSelectorRoutingModule } from './app-selector-routing.module';
import { AppSelectorComponent } from './app-selector.component';

import { ComponentsModule } from "../../../projects/shared/src/public-api";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "../../../projects/shared/src/public-api";
import { NbLayoutModule } from "@nebular/theme";

@NgModule({
  declarations: [AppSelectorComponent],
  imports: [
    CommonModule,
    AppSelectorRoutingModule,
    ComponentsModule,
    NbLayoutModule
  ]
})
export class AppSelectorModule { }
