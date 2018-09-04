import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../../components/home/home.component';
import {LoginComponent} from '../../components/login/login.component';
import {AuthGuard} from '../../guards/auth.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

//import {NgModule} from '@angular/core';
//import {RouterModule, Routes} from '@angular/router';
//
//import {DashboardComponent} from '../../components/dashboard/dashboard.component';
//import {MoviesComponent} from '../../components/movies/movies.component';
//import {MovieDetailComponent} from '../../components/movie-detail/movie-detail.component';
//import {HomeComponent} from '../../components/home/home.component';
//import {LoginComponent} from '../../components/login/login.component';
//import { AuthGuard } from '../../guards/auth.guard';
//
//
//const routes: Routes = [
//  //  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
////  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
////  {path: 'login', component: LoginComponent},
////  {path: '', redirectTo: '/home', pathMatch: 'full'},
////  {path: 'dashboard', component: DashboardComponent},
////  {path: 'detail/:id', component: MovieDetailComponent},
////  {path: 'movies', component: MoviesComponent},
////  {path: 'home', component: HomeComponent},
//];
//
//@NgModule({
//
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//
//export class AppRoutingModule {}
