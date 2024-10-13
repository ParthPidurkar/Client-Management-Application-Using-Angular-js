import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  clients: any[] = [];
  newClient = { id: '', name: '', email: '', phone: '' };
  editingClient: any = null;  

  constructor(private clientService: ClientService) {}  

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  addClient() {
    if (!this.newClient.name) {
      alert('Name is required.');
      return;
    }
  
    if (!this.newClient.email) {
      alert('Email is required.');
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(this.newClient.email)) {
      alert('Enter a valid email address.');
      return;
    }
  
    if (!this.newClient.phone) {
      alert('Phone number is required.');
      return;
    } else if (!/^\d{10}$/.test(this.newClient.phone)) {
      alert('Enter a valid 10-digit phone number.');
      return;
    }

    if (this.editingClient) {
      // Save updates if in edit mode
      this.clientService.updateClient(this.editingClient.id, this.newClient).subscribe(updatedClient => {
        const index = this.clients.findIndex(client => client.id === this.editingClient.id);
        this.clients[index] = updatedClient;
        this.cancelEdit();
      });
    } else {
      // Add new client if not in edit mode
      this.newClient.id = (Math.floor(Math.random() * 10000) + Date.now()).toString();
  
      this.clientService.addClient(this.newClient).subscribe(client => {
        this.clients.push(client);
        this.newClient = { id: '', name: '', email: '', phone: '' };
      });
    }
  }

  editClient(client: any) {
    // Enter edit mode with the selected client's details
    this.editingClient = client;
    this.newClient = { ...client };
  }

  cancelEdit() {
    // Exit edit mode and reset the form
    this.editingClient = null;
    this.newClient = { id: '', name: '', email: '', phone: '' };
  }

 
  deleteClient(id: string) {
    const confirmed = confirm('Are you sure you want to delete this client?');
    
    if (confirmed) {
      this.clientService.deleteClient(id).subscribe(() => {
        this.clients = this.clients.filter(client => client.id !== id);
      });
    }
  }
  
}