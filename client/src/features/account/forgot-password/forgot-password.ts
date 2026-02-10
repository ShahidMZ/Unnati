import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
    private accountService = inject(AccountService);
    private router = inject(Router);
    protected data: any = {};

    reset() {
        console.log('Password reset requested: ', this.data);
    }

    cancel() {
        // this.accountService.displayMode.set(this.accountService.displayModes[0]);
        this.router.navigate(['/login']);
        console.log('Password reset cancelled');
    }
}
