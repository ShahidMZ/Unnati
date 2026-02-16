import { Routes } from '@angular/router';
import { Login } from '../features/account/login/login';
import { Home } from '../features/home/home';
import { ForgotPassword } from '../features/account/forgot-password/forgot-password';
import { Signup } from '../features/account/signup/signup';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../features/errors/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';
import { Dashboard } from '../features/dashboard/dashboard';
import { Profile } from '../features/profile/profile';

export const routes: Routes = [
    { path: '', component: Login },

    { path: 'login', component: Login },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'signup', component: Signup },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { 
                path: 'home', 
                component: Home,
                children: [
                    { path: 'dashboard', component: Dashboard },
                    { path: 'profile', component: Profile },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ]
            },
        ]
    },

    { path: 'errors', component: TestErrors },
    { path: 'server-error', component: ServerError },
    { path: '**', component: NotFound },
];
