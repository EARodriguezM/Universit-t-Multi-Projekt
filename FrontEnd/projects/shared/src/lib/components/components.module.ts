import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoutComponent, ResetPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
