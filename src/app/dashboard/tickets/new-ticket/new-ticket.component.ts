import { Component } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(titleElement: string, ticketText: string) {
    console.log(titleElement);
    console.log(ticketText);
  }
}
