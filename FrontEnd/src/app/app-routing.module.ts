import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule) 
  }, 
  { 
    path: 'app-selector', 
    loadChildren: () => import('./app-selector/app-selector.module')
    .then(m => m.AppSelectorModule) 
  },
  { path: '', redirectTo: 'app-selector', pathMatch: 'full' },
  { path: '**', redirectTo: 'app-selector' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
