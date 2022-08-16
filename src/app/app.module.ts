import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives-demo/directives/highlight.directive';
import { BetterHighlightDirective } from './directives-demo/directives/better-highlight.directive';
import { UnlessDirective } from './directives-demo/directives/unless.directive';
import { ServerElementComponent } from './components-demo/server-element/server-element.component';
import { CockpitComponent } from './components-demo/cockpit/cockpit.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { AccountComponent } from './services-demo/account/account.component';
import { NewAccountComponent } from './services-demo/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServerElementComponent,
    CockpitComponent,
    HeaderComponent,
    DirectivesDemoComponent,
    ComponentsDemoComponent,
    ServicesDemoComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
