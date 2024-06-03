import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event } from '../../../models/event.models';
import { EventService } from '../../../services/Event/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService) {}

  events: Event[] = [];

  ngOnInit() {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events;
        console.log(this.events);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  sortEvents() {
    this.events.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
    console.log('sorted events: ', this.events);
  }
}
