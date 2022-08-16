import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @HostBinding('class.highlight') isActive: boolean = false;
  @HostListener('mouseover', ['$event']) onMouseOver(event: MouseEvent) {
    this.isActive = true;
  }
  @HostListener('mouseout', ['$event']) onMouseOut(event: MouseEvent) {
    this.isActive = false;
  }
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.borderColor = 'red';
  }
}
