import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  clients: any[] = [];
  selectedDate: string = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.loadClientData();
  }

  loadClientData(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clientService.getMeetings().subscribe((meetings) => {
        this.clients = clients.map(client => ({
          ...client,
          meetings: meetings.filter(meeting => meeting.clientId === client.id),
          filteredMeetings: [] 
        }));
        this.filterMeetingsByDate();
      });
    });
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedDate = target.value;
    this.filterMeetingsByDate();
  }

  filterMeetingsByDate(): void {
    this.clients.forEach(client => {
      client.filteredMeetings = client.meetings.filter((meeting: any) => {
        const meetingDate = new Date(meeting.date).toISOString().split('T')[0];
        return meetingDate === this.selectedDate;
      });
    });
  }
  hasMeetings(): boolean {
    return this.clients.some(client => client.filteredMeetings.length > 0);
  }
  

}
