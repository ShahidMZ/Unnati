import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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
    currentUser = signal<User | null>(null);
    theme = signal('light');
    version = signal('v0.1.0');

    displayModes = ["login", "signup", "forgotPassword"];
    displayMode = signal(this.displayModes[0]);

    baseUrl: string = 'https://localhost:5001/api/';

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
}
