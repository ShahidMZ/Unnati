import { Component, inject, signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
    protected accountService = inject(AccountService);
    protected readonly title = signal('Dashboard');

    userLoggedIn(): boolean {
        return this.accountService.currentUser() !== null;
    }

    logout() {
        this.accountService.logout();
    }
}
