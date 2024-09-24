import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})


export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  client: Client = { id: 0, name: '', email: '', phone: '' };
  displayedColumns: string[] = ['name', 'email', 'phone'];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  onSubmit(): void {
    if (this.client.name && this.client.email && this.client.phone) {
      this.clientService.createClient(this.client).subscribe((newClient) => {
        this.clients.push(newClient);
        this.client = { id: 0, name: '', email: '', phone: '' };  // Reset form
      });
    }
  }
}

