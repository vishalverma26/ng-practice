import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent implements OnInit {

  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  constructor() { }
  cTitle = 'cockpit';

  ngOnInit(): void {
  }

  onChangeFirst() {
    this.cTitle = 'Changed!';
    console.log(this.cTitle)
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
