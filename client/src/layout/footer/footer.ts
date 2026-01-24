import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    protected readonly year = new Date().getFullYear();
    protected readonly copyright = signal(`Copyright © ${this.year} Shahid Mohammed Zubair`);
}
