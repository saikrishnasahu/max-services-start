import { Component, Input } from '@angular/core';

// import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // how to provide the service
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // telling to inject the svc into this class while creating instance of this class
  constructor(
    // private loggingService: LoggingService, 
    private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
    // not how service should be called
    // const svc = new LoggingService();
    // this.loggingService.logStatusChange(status);
  }
}
