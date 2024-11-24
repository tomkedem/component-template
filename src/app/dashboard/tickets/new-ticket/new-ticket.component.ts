import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  OnSubmit(titleElement: string, requestInput: HTMLTextAreaElement){
    console.dir(titleElement);
    console.log(requestInput.value);


    this.form()?.nativeElement.reset();    
  }
}
