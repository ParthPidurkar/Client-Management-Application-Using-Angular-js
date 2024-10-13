import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meetings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  clients: any[] = [];
  meetings: any[] = [];
  newMeeting = { id: '', clientId: 0, date: '', time: '', agenda: '' };
  editingMeeting: any = null; 

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });

    this.clientService.getMeetings().subscribe(data => {
      this.meetings = data;
    });
  }

  addMeeting() {
    const missingFields = [];
  
    if (!this.newMeeting.clientId) missingFields.push('Client');
    if (!this.newMeeting.date) missingFields.push('Date');
    if (!this.newMeeting.time) missingFields.push('Time');
    if (!this.newMeeting.agenda) missingFields.push('Agenda');
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }

    if (this.editingMeeting) {
      this.clientService.updateMeeting(this.editingMeeting.id, this.newMeeting).subscribe(updatedMeeting => {
        const index = this.meetings.findIndex(meeting => meeting.id === this.editingMeeting.id);
        this.meetings[index] = updatedMeeting;
        this.cancelEdit();
      });
    }
     else {
      this.newMeeting.id = (Math.floor(Math.random() * 10000) + Date.now()).toString();
      this.clientService.addMeeting(this.newMeeting).subscribe(meeting => {
        this.meetings.push(meeting);
        this.newMeeting = { id: '', clientId: 0, date: '', time: '', agenda: '' };
      });
    }
  }

  editMeeting(meeting: any) {
    this.editingMeeting = meeting;
    this.newMeeting = { ...meeting };
  }

  cancelEdit() {
    this.editingMeeting = null;
    this.newMeeting = { id: '', clientId: 0, date: '', time: '', agenda: '' };
  }



  deleteMeeting(id: string) {
    this.clientService.deleteMeeting(id).subscribe(() => {
      this.meetings = this.meetings.filter(meeting => meeting.id !== id);
    });
  }
}
