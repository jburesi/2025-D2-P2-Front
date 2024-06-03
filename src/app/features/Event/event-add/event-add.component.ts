import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../../../models/event.models';
import { EventService } from '../../../services/Event/event.service';

@Component({
  selector: 'app-event-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './event-add.component.html',
})
export class EventAddComponent {
  form: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(
    private eventService: EventService,
    private _fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this._fb.group<Event>({
      title: '',
      date: new Date(),
      description: '',
      location: '',
    });
  }

  submit() {
    this.eventService.addEvent(this.form.value).subscribe({
      next: (event) => {
        console.log(event);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error(error);
      },
    });
  }
}
