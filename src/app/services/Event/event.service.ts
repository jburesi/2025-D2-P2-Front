import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../models/event.models';
import { ApiRequestService } from '../ApiRequest/api-request.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private apiRequest: ApiRequestService) {}

  addEvent(event: Event): Observable<Event> {
    return this.apiRequest.post<Event>('Event', event);
  }

  getEvents(): Observable<Event[]> {
    return this.apiRequest.get<Event[]>('Event');
  }

  updateEvent(event: Event): Observable<Event> {
    return this.apiRequest.put<Event>('Event', event);
  }

  deleteEvent(id: number): Observable<Event> {
    return this.apiRequest.delete<Event>(`Event/${id}`);
  }
}
