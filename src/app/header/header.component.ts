import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tab } from '../shared/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tab = Tab;
  @Output() updateTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tab: string) {
    this.updateTab.emit(tab);
  }

}
