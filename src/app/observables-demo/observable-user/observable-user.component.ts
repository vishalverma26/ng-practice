import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservableUserService } from '../observable-user.service';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.scss']
})
export class ObservableUserComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private observableUserSvc: ObservableUserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    this.observableUserSvc.activatedEmitter.next(true);
  }
}
