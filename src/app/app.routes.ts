import { Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "locations", component: LocationComponent }
];
