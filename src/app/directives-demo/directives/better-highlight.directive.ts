import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: string;
  @Input('appBetterHighlight') defaultColor: string = 'lightyellow';
  @Input() highlightColor: string = 'lightblue';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle((this.el.nativeElement as HTMLDivElement), 'background-color', this.defaultColor);
  }

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: MouseEvent) {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: MouseEvent) {
    this.bgColor = this.defaultColor;
  }
}
