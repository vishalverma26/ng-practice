import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean) {
    // show (append) if false
    if(!condition) {
      this.viewcontainer.createEmbeddedView(this.template);
    }
    // hide (remove) if true
    else {
      this.viewcontainer.clear();
    }
  }
  constructor(private template: TemplateRef<any>, private viewcontainer: ViewContainerRef) {}
}
