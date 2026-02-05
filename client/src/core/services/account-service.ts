import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/account/user';
import { tap } from 'rxjs';
import { Login } from '../../features/login/login';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private http = inject(HttpClient);
    currentUser = signal<User | null>(null);
    forgotPasswordMode = signal(false);

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

        console.log('Logout successful!');
    }
}
