import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUrl = 'http://localhost:3000/clients';
  private meetingsUrl = 'http://localhost:3000/meetings';

  constructor(private http: HttpClient) { }

  // Client Methods
  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.clientsUrl);
  }
  // adding new client
  addClient(client: any): Observable<any> {
    return this.http.post<any>(this.clientsUrl, client);
  }
  // Updating client
  updateClient(id: string, updatedClient: any): Observable<any> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.put<any>(url, updatedClient);
  }
  // Deleting  client
  // deleteClient(id: string): Observable<any> {
  //   const url = `${this.clientsUrl}/${id}`;
  //   return this.http.delete<any>(url);
  // }
  deleteClient(id: string): Observable<any> {
    return this.getMeetings().pipe(
      switchMap((meetings: any[]) => {
        const clientMeetings = meetings.filter(meeting => meeting.clientId === id);
        const deleteRequests = clientMeetings.map(meeting =>
          this.deleteMeeting(meeting.id)
        );
        return forkJoin(deleteRequests).pipe(
          switchMap(() => {
            const url = `${this.clientsUrl}/${id}`;
            return this.http.delete<any>(url);
          })
        );
      })
    );
  }
  // Meeting Methods
  getMeetings(): Observable<any[]> {
    return this.http.get<any[]>(this.meetingsUrl);
  }
// Adding Meeting 
  addMeeting(meeting: any): Observable<any> {
    return this.http.post<any>(this.meetingsUrl, meeting);
  }
// updating Meeting 
  updateMeeting(id: string, updatedMeeting: any): Observable<any> {
    const url = `${this.meetingsUrl}/${id}`;
    return this.http.put<any>(url, updatedMeeting);
  }  
// Deleting Meeting 
  deleteMeeting(id: string): Observable<any> {
    const url = `${this.meetingsUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
