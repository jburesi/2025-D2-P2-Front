import { Routes } from '@angular/router';
import { EventAddComponent } from './features/Event/event-add/event-add.component';
import { EventListComponent } from './features/Event/event-list/event-list.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => [
      { path: '', component: EventListComponent },
      { path: 'add', component: EventAddComponent },
    ],
  },
];
