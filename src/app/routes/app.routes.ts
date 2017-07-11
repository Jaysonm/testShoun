
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'home', loadChildren: '../components/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../components/about/about.module#AboutModule' },
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
