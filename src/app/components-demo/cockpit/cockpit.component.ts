import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Input() title: string;

  @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;


  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges Call', changes);
  }

  constructor() {
    console.log('Constructor Call');
  }

  ngOnInit(): void {
    console.log('OnInit Call');
  }

  ngDoCheck() {
    console.log('Do Check Call');
  }

  ngAfterContentInit() {
    console.log('Content Init Call');
  }

  ngAfterContentChecked() {
    console.log('Content Checked Call');
  }

  ngAfterViewInit(): void {
    console.log('View Init Called');
  }

  ngAfterViewChecked(): void {
    console.log('View Checked Call');
  }

  ngOnDestroy() {
    console.log('On Destroy Call');
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }


  changeCockpitTitle() {
    this.title = 'changed again';
    console.log(this.title)
  }

  showCockPitTitle() {
    console.log(this.title);
  }
}
