import { Component, inject } from '@angular/core';
import { AccountService } from '../../../core/services/account-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
    private accountService = inject(AccountService);
    protected data: any = {};

    signup() {

    }

    cancel() {
        this.accountService.displayMode.set(this.accountService.displayModes[0]);
        console.log('Password reset cancelled');
    }
}
