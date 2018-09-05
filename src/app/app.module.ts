import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './modules/routing/app-routing.module';

import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {MessagesComponent} from './components/messages/messages.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';
import {MoviesComponent} from './components/movies/movies.component';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {LOCALE_ID} from '@angular/core';

registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    MessagesComponent,
    MoviesComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
