import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }
  onSubmit(titleElement: string, ticketText: string) {
    console.log(titleElement);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
