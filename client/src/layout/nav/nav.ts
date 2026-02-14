import { Component, inject, signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink } from "@angular/router";
import { LayoutService } from '../../core/services/layout-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
    protected accountService = inject(AccountService);
    protected router = inject(Router);
    protected layout = inject(LayoutService);
    protected readonly title = signal('Dashboard');

    userLoggedIn(): boolean {
        return this.accountService.currentUser() !== null;
    }

    logout() {
        this.accountService.logout();
    }
}
