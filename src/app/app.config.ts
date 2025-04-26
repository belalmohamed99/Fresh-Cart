import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { routes } from './app.routes';
import { headerInterceptor } from './core/interceptor/header/header.interceptor';
import { errorsInterceptor } from './core/interceptor/errors/errors.interceptor';
import { spinnerInterceptor } from './core/interceptor/spineer/spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular core enhancements
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),

    // Router configuration
    provideRouter(
      routes,
      withViewTransitions(),
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),

    // HTTP client with interceptors
    provideHttpClient(
      withFetch(),
      withInterceptors([
        headerInterceptor,
        errorsInterceptor,
        spinnerInterceptor,
      ])
    ),

    // Animations
    provideAnimations(),

    // Third-party libraries
    provideToastr({
      preventDuplicates: true,
      timeOut: 1500,        
      progressBar: true,
      closeButton: true,
    }),
    importProvidersFrom(NgxSpinnerModule),
  ],
};
