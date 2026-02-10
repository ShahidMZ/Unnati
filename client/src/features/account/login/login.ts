import { Component, inject, OnInit, signal } from '@angular/core';
import { AccountService } from '../../../core/services/account-service';
import { User } from '../../../core/models/account/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotPassword } from "../forgot-password/forgot-password";
import { Signup } from "../signup/signup";
import { Footer } from "../../../layout/footer/footer";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [CommonModule, FormsModule, ForgotPassword, Signup, Footer],
    templateUrl: './login.html',
    styleUrl: './login.css',
})
export class Login implements OnInit {
    protected accountService = inject(AccountService);
    protected router = inject(Router);
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

    showSignup() {
        // this.accountService.displayMode.set(this.accountService.displayModes[1]);
        this.router.navigate(['/signup']);
    }

    showForgotPassword() {
        // this.accountService.displayMode.set(this.accountService.displayModes[2]);
        this.router.navigate(['/forgot-password']);
    }
}
