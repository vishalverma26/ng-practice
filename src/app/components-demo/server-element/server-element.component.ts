import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, AfterContentInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('On Init Paragraph >', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('Content Init Happened >', this.paragraph.nativeElement.textContent);
  }


}
