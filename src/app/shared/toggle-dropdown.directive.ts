import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[toggleDropdown]'
})
export class ToggleDropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
