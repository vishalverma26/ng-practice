import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss'],
  providers: []
})
export class ServicesDemoComponent implements OnInit {
  accounts: {name: string, status: string}[];

  ngOnInit() {
    this.accounts = this.accountsSvc.accounts;
  }

  constructor(private accountsSvc: AccountsService) {}

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsSvc.addAccount(newAccount.name, newAccount.status);
  }
}
