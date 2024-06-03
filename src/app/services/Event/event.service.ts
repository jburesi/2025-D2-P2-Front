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
    return this.apiRequest.post<Event>('Events', event);
  }

  getEvents(): Observable<Event[]> {
    return this.apiRequest.get<Event[]>('Events');
  }

  updateEvent(event: Event): Observable<Event> {
    return this.apiRequest.put<Event>('Events', event);
  }

  deleteEvent(id: number): Observable<Event> {
    return this.apiRequest.delete<Event>(`Events/${id}`);
  }
}
