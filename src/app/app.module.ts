import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './modules/routing/app-routing.module';

import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

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
    LoginComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
//    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}


//import {NgModule} from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {FormsModule} from '@angular/forms';
//import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
//import {AppComponent} from './app.component';
////import {routing} from './app-routing.module';
//import {AppRoutingModule} from './modules/routing/app-routing.module';
//import {AuthGuard} from './guards/auth.guard';
////import { JwtInterceptor } from './helpers/';
//import {AuthenticationService} from './services/auth/auth.service';
//import {UserService} from './services/user/user.service';
//import {LoginComponent} from './components/login/login.component';
//import {HomeComponent} from './components/home/home.component';
//
//@NgModule({
//  imports: [
//    BrowserModule,
//    FormsModule,
//    HttpClientModule,
//    AppRoutingModule
//  ],
//  declarations: [
//    AppComponent,
//    LoginComponent,
//    HomeComponent
//  ],
//  providers: [
//    AuthGuard,
//    AuthenticationService,
//    UserService,
//    {
//      provide: HTTP_INTERCEPTORS,
//      useClass: JwtInterceptor,
//      multi: true
//    },
//
//    //         providers used to create fake backend
//    //        fakeBackendProvider
//  ],
//  bootstrap: [AppComponent]
//})
//
//export class AppModule {}

//import { Injectable } from '@angular/core';
//import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
// 
//@Injectable()
//export class JwtInterceptor implements HttpInterceptor {
//    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//        // add authorization header with jwt token if available
//        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//        if (currentUser && currentUser.token) {
//            request = request.clone({
//                setHeaders: { 
//                    Authorization: `Bearer ${currentUser.token}`
//                }
//            });
//        }
// 
//        return next.handle(request);
//    }
//}

//import {NgModule} from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {FormsModule} from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';
//
//import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from './in-memory-data.service';
//
//import {AppRoutingModule} from './app-routing.module';
//
//import {AppComponent} from './app.component';
//import {DashboardComponent} from './dashboard/dashboard.component';
//import {MovieDetailComponent} from './movie-detail/movie-detail.component';
//import {MoviesComponent} from './movies/movies.component';
//import {MovieSearchComponent} from './movie-search/movie-search.component';
//import {MessagesComponent} from './messages/messages.component';
//
//import { RouterModule, Routes } from '@angular/router';
//import { AppService } from './app.service';
//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//
//
//@NgModule({
//
//  imports: [
//    BrowserModule,
//    FormsModule,
//    AppRoutingModule,
//    HttpClientModule
//  ],
//  declarations: [
//    AppComponent,
//    DashboardComponent,
//    MoviesComponent,
//    MovieDetailComponent,
//    MessagesComponent,
//    MovieSearchComponent,
//    HomeComponent,
//    LoginComponent
//  ],
////  providers: [AppService],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule {}
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//
//import { AppComponent } from './app.component';
//import { HttpClientModule } from '@angular/common/http';
//
//@NgModule({
//  declarations: [
//    AppComponent
//  ],
//  imports: [
//    BrowserModule,
//    HttpClientModule
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }