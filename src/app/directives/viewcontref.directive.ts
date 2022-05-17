import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appViewcontref]'
})
export class ViewcontrefDirective {

  constructor(private myView: ViewContainerRef, private template: TemplateRef<Object>) {

  }

  @Input() set appViewcontref(el: HTMLButtonElement) {
    el.addEventListener('click', ()=>{
      this.myView.clear();
      this.myView.createEmbeddedView(this.template)
    })
  }

}
