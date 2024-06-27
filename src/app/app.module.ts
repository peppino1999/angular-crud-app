import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { API_URL } from './core/tokens';
import { LoggingInterceptor, loggingInterceptor } from './core/interceptors/logging.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { erroInterceptor } from './core/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: '/api'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loggingInterceptor,
        authInterceptor,
        erroInterceptor
      ]),
      withInterceptorsFromDi()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
