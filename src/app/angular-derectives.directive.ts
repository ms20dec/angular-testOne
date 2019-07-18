import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAngularDerectives]'
})
export class AngularDerectivesDirective {

  constructor(Element: ElementRef) { 
  Element.nativeElement.innerText="Text is changed by changeText Directive. ";
  }

}