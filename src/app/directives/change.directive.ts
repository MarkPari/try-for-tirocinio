import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = "lightBlue";
  }

}
