import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
    private accountService = inject(AccountService);
    protected data: any = {};

    reset() {
        console.log('Password reset requested: ', this.data);
    }

    cancel() {
        this.accountService.forgotPasswordMode.set(false);
        console.log('Password reset cancelled');
    }
}
