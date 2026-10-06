import { ApplicationConfig } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {

  providers: [

    provideHttpClient(),

    importProvidersFrom(AppRoutingModule)

  ]

};
