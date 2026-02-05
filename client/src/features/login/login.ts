import { Component, inject, OnInit, signal } from '@angular/core';
import { AccountService } from '../../core/services/account-service';
import { User } from '../../core/models/account/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotPassword } from "../account/forgot-password/forgot-password";

@Component({
    selector: 'app-login',
    imports: [CommonModule, FormsModule, ForgotPassword],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login implements OnInit {
    protected accountService = inject(AccountService);
    protected creds: any = {};

    constructor() { }

    ngOnInit(): void {
        this.setCurrentUser();
    }

    setCurrentUser() {
        const userString = localStorage.getItem('currentUser');

        if (!userString) {
            return;
        }
        
        const user: User = JSON.parse(userString);
        this.accountService.currentUser.set(user);
    }

    login(creds: Login) {
        this.accountService.login(creds).subscribe({
            next: (response: User) => {
                console.log('Login successful!', response);
            },
            error: error => console.log('Login failed!', error),
            complete: () => {
                console.log('Login request completed!');
                this.creds = {};
            }
        });
    }

    showForgotPassword() {
        this.accountService.forgotPasswordMode.set(true);
    }
}
