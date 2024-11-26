import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{
    @ViewChild('form') form?: ElementRef<HTMLFormElement>;
//private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title: string; text:string}>();
  add = output<{title: string; text:string}>();

  ngOnInit() {
    console.log('onInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form?.nativeElement);
    
    
  }
 

  OnSubmit(title: string, ticketText: string){
    this.add.emit({title:title, text: ticketText})
    this.form?.nativeElement.reset();    
  }
}
