import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValditorDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.border = '1px solid red'
   }

}
