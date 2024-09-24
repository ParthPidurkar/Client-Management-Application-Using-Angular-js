import { Routes } from '@angular/router';
import { ClientsComponent } from './components.css/clients/clients.component';
import { MeetingsComponent } from './components.css/meetings/meetings.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'meetings', component: MeetingsComponent },
    { path: '', redirectTo: '/clients', pathMatch: 'full' }
];
