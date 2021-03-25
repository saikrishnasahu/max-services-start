import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

// if we need to inject any other service into this service,
// we add @Injectable
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({
            name: name,
            status: status
        });
        this.loggingService.logStatusChange(status);
    }

    updateAccount(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}