import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const providers = []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class W_chter{
  static charge(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
