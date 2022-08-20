import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private log: LoggingService, private accountSvc: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountSvc.addAccount(accountName, accountStatus)
  }
}
