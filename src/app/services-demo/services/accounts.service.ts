import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {


  public accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private log: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.log.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
