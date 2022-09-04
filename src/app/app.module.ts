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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggingService } from './services-demo/services/logging.service';
import { EditServerComponent } from './routing-demo/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing-demo/servers/server/server.component';
import { UserComponent } from './routing-demo/users/user/user.component';
import { UsersComponent } from './routing-demo/users/users.component';
import { ServersComponent } from './routing-demo/servers/servers.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { ObservableUserComponent } from './observables-demo/observable-user/observable-user.component';
import { ObservableHomeComponent } from './observables-demo/observable-home/observable-home.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { APP_BASE_HREF, HashLocationStrategy } from '@angular/common';
import { ParameterHashLocationStrategy } from './shared/param-location.service';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { SortPipe } from './shared/sort.pipe';
import { HTTPDemoComponent } from './httpdemo/httpdemo.component';
import { ToggleDropdownDirective } from './shared/toggle-dropdown.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './httpdemo/auth-interceptor.service';
import { LoggingInterceptorService } from './httpdemo/logging-interceptor.service';

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
    NewAccountComponent,
    RoutingDemoComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    NotFoundComponent,
    ObservablesDemoComponent,
    ObservableUserComponent,
    ObservableHomeComponent,
    TemplateFormsDemoComponent,
    ReactiveFormsDemoComponent,
    PipesDemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HTTPDemoComponent,
    ToggleDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    {
      provide: HashLocationStrategy,
      useClass: ParameterHashLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: window.location.pathname
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    // Order in which we inject interceptors matter as they run as per order
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
