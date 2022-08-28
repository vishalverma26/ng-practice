import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservableUserService } from './observable-user.service';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  userActivated: boolean = false;

  constructor(private observableUserSvc: ObservableUserService) {};

  ngOnInit(): void {
    this.subscription = this.observableUserSvc.activatedEmitter.subscribe(isActivated => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
