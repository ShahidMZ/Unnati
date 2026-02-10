import { Routes } from '@angular/router';
import { Login } from '../features/account/login/login';
import { Home } from '../features/home/home';
import { ForgotPassword } from '../features/account/forgot-password/forgot-password';
import { Signup } from '../features/account/signup/signup';

export const routes: Routes = [
    { path: '', component: Login },

    { path: 'login', component: Login },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'signup', component: Signup },
    { path: 'home', component: Home },

    { path: '**', component: Login },
];
