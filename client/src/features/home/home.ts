import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [Sidebar, RouterOutlet],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    protected layout = inject(LayoutService);
}
