import { Component, inject, signal } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    protected layout = inject(LayoutService);

    protected readonly year = new Date().getFullYear();
    protected readonly copyright = signal(`© ${this.year} Dashboard by `);
    protected readonly author = signal('Shahid Mohammed Zubair');
    protected readonly authorUrl = signal('https://shahidmzubair.bitbucket.io/');
}
