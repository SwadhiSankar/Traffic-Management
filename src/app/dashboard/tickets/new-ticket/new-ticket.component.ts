import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
  enteredTitle = '';
  enteredText = '';
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{ title: string; text: string }>();
  ngOnInit() {
    console.log('On Init');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('After View Init');
    console.log(this.form?.nativeElement);
  }
  // onSubmit(titleElement: string, ticketText: string) {
  //   console.log(titleElement);
  //   console.log(ticketText);
  //   this.form?.nativeElement.reset();
  //   this.add.emit({
  //     title: titleElement,
  //     text: ticketText,
  //   });
  // }

  //using two way binding
  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    //to clear we can also send back them some values
    this.enteredText = '';
    this.enteredTitle = '';
  }
}
