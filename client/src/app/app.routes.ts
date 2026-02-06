import { Routes } from '@angular/router';
import { Login } from '../features/account/login/login';
import { ForgotPassword } from '../features/account/forgot-password/forgot-password';
import { Signup } from '../features/account/signup/signup';
import { Home } from '../features/home/home';

export const routes: Routes = [
    { path: '', component: Login },
    { path: '**', component: Login },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'signup', component: Signup },
    { path: 'home', component: Home },
];
