import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSelectorRoutingModule } from './app-selector-routing.module';
import { AppSelectorComponent } from './app-selector.component';

import { ComponentsModule } from "../../../projects/shared/src/public-api";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "../../../projects/shared/src/public-api";

@NgModule({
  declarations: [AppSelectorComponent],
  imports: [
    CommonModule,
    AppSelectorRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppSelectorModule { }
