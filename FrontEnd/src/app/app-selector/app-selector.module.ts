import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSelectorRoutingModule } from './app-selector-routing.module';
import { AppSelectorComponent } from './app-selector.component';

import { NbLayoutModule } from "@nebular/theme";
import { ThemeModule } from "./w-chter/@theme/theme.module";


@NgModule({
  declarations: [AppSelectorComponent],
  imports: [
    CommonModule,
    AppSelectorRoutingModule,
    NbLayoutModule,
    ThemeModule
  ]
})
export class AppSelectorModule { }
