import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsDemoComponent } from "./components-demo/components-demo.component";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { ObservableHomeComponent } from "./observables-demo/observable-home/observable-home.component";
import { ObservableUserComponent } from "./observables-demo/observable-user/observable-user.component";
import { ObservablesDemoComponent } from "./observables-demo/observables-demo.component";
import { HomeComponent } from "./routing-demo/home/home.component";
import { RoutingDemoComponent } from "./routing-demo/routing-demo.component";
import { EditServerComponent } from "./routing-demo/servers/edit-server/edit-server.component";
import { ServerComponent } from "./routing-demo/servers/server/server.component";
import { ServersComponent } from "./routing-demo/servers/servers.component";
import { UserComponent } from "./routing-demo/users/user/user.component";
import { UsersComponent } from "./routing-demo/users/users.component";
import { ServicesDemoComponent } from "./services-demo/services-demo.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'directives-demo',
    pathMatch: 'full'
  },
  {
    path: 'directives-demo',
    component: DirectivesDemoComponent
  },
  {
    path: 'components-demo',
    component: ComponentsDemoComponent
  },
  {
    path: 'services-demo',
    component: ServicesDemoComponent
  },
  {
    path: 'routing-demo',
    component: RoutingDemoComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'servers',
        component: ServersComponent,
        children: [
          // {
          //   path: ':id',
          //   component: ServerComponent, // this level must have a router-outlet if it wants to load the dynamic component.
          //   children: [
          //     {
          //       path: 'edit/:id/:name',
          //       component: EditServerComponent
          //     }
          //   ]
          // },

          {
            path: ':id',
            component: ServerComponent
          },
          {
            path: ':id/edit',
            component: EditServerComponent
          }

        ]
      },
      {
        path: 'users',
        component: UsersComponent,
        children: [
          {
            path: ':id/:name',
            component: UserComponent
          }
        ]
      }
    ]
  },
  {
    path: 'observables-demo',
    component: ObservablesDemoComponent,
    children: [
      {
        path: '',
        component: ObservableHomeComponent
      },
      {
        path: 'user/:id',
        component: ObservableUserComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
