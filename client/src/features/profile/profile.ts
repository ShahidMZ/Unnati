import { Component, inject } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-profile',
  imports: [PageHeader],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
    protected accountService = inject(AccountService);
}
