import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

import { Extrato } from './extrato/extrato';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'extrato',
    pathMatch: 'full'
  },

  {
    path: 'extrato',
    component: Extrato
  },

  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent
  }

];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule { }
