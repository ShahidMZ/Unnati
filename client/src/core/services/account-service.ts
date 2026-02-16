import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, signal } from '@angular/core';
import { User } from '../models/account/user';
import { tap } from 'rxjs';
import { Login } from '../../features/account/login/login';
import { Router } from '@angular/router';
import { ToastService } from './toast-service';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private http = inject(HttpClient);
    protected router = inject(Router);
    private toast = inject(ToastService);

    baseUrl: string = 'https://localhost:5001/api/';
    
    version = signal('v0.1.0');
    currentUser = signal<User | null>(null);
    theme = signal<string>(this.getStoredTheme());
    lightTheme = signal("corporate");
    darkTheme = signal("dark");
    defaultTheme = this.darkTheme();

    displayModes = ["login", "signup", "forgotPassword"];
    displayMode = signal(this.displayModes[0]);

    constructor() {
        effect(() => {
            const currentTheme = this.theme();
            document.documentElement.setAttribute("data-theme", currentTheme);
            localStorage.setItem("theme", currentTheme);
        });
    }

    login(creds: Login) {
        return this.http.post<User>(this.baseUrl + 'account/login', creds).pipe(
            tap((user) => {
                if (user) {
                    this.currentUser.set(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    console.log('User logged in:', user);
                }
            })
        );
    }

    logout() {
        this.currentUser.set(null);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
        this.toast.success('Logout successful!');

        console.log('Logout successful!');
    }

    private getStoredTheme(): string {
        return localStorage.getItem('theme') || this.defaultTheme.toString();
    }

    toggleTheme() {
        const newTheme = this.theme() === this.darkTheme() ? this.lightTheme() : this.darkTheme();

        this.theme.set(newTheme);
    }

    setTheme(theme: string) {
        this.theme.set(theme);
    }
}
