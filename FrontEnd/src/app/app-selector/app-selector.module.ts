import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSelectorRoutingModule } from './app-selector-routing.module';
import { AppSelectorComponent } from './app-selector.component';

import { ComponentsModule } from "../../../projects/shared/src/public-api";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "../../../projects/shared/src/public-api";
import { NbLayoutModule } from "@nebular/theme";
import { ThemeModule } from "./w-chter/@theme/theme.module";


@NgModule({
  declarations: [AppSelectorComponent],
  imports: [
    CommonModule,
    AppSelectorRoutingModule,
    ComponentsModule,
    NbLayoutModule,
    ThemeModule
  ]
})
export class AppSelectorModule { }
