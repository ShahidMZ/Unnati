import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    protected readonly year = new Date().getFullYear();
    protected readonly copyright = signal(`© 2012 - ${this.year} Dashboard by `);
    protected readonly author = signal('Shahid Mohammed Zubair');
    protected readonly authorUrl = signal('https://shahidmzubair.bitbucket.io/');
}
