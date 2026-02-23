import { Component, Input } from '@angular/core';
import { SidebarItem } from '../../core/models/layout/sidebar-item';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from "../sidebar-item/sidebar-item";

@Component({
    selector: 'app-overlay',
    imports: [CommonModule, SidebarItemComponent],
    templateUrl: './overlay.html',
    styleUrl: './overlay.css',
})
export class OverlayComponent {
    @Input() items: SidebarItem[] = [];
    @Input() item: SidebarItem = {} as SidebarItem;
}
