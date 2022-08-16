import { Component } from '@angular/core';
import { Tab } from './shared/shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tab = Tab;
  $showTab: string = this.tab?.Directives;
  names = ['vishal', 'aknika', 'karan']

  updateTab(tab: string) {
    this.$showTab = tab;
  }
}
