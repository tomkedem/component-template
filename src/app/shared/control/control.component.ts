import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control', 
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener ()
  lable = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; 
  private control = 
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  onClick(){
    console.log('Clicked!');
    console.log('Clicked!: ' , this.el);
    console.log('My control: ', this.control()?.nativeElement.value);
    
    
  }

}
