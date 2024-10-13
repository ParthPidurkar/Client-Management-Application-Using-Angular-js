import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientsComponent } from './Components/clients/clients.component';
import { MeetingsComponent } from './Components/meetings/meetings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientsComponent,MeetingsComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client Management Application';
}
