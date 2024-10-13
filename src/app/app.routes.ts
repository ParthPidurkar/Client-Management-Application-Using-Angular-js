import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './Components/clients/clients.component';
import { MeetingsComponent } from './Components/meetings/meetings.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {path: 'home', component:HomeComponent},
  { path: 'clients', component: ClientsComponent },
  { path: 'meetings', component: MeetingsComponent },
];
