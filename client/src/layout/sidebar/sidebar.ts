import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';
import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AccountService } from '../../core/services/account-service';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {
    protected layout = inject(LayoutService);
    protected accountService = inject(AccountService);
    widthClass = computed(() => this.layout.collapsed() ? 'w-16' : 'w-64');
    tooltipClasses = computed(() => this.layout.collapsed() ? 'flex tooltip tooltip-right w-full z-50' : 'flex w-full');

    menuItems = [
        { label: 'Home', icon: 'fa-solid fa-tachograph-digital fa-sm', route: '/home/dashboard' },
        { label: 'Profile', icon: 'fa-solid fa-user fa-sm', route: '/home/profile' },
        { label: 'User Management', icon: 'fa-solid fa-users fa-sm', route: '/home' },
        { label: 'SAP Management', icon: 'fa-brands fa-hubspot fa-sm', route: '/home' },
        { label: 'Bookings', icon: 'fa-solid fa-bookmark fa-sm', route: '/home' },
        { label: 'HR Management', icon: 'fa-solid fa-person fa-sm', route: '/home' },
        { label: 'Discrepancy Management', icon: 'fa-solid fa-bug fa-sm', route: '/home' },
        { label: 'Ticketing System', icon: 'fa-solid fa-ticket fa-sm', route: '/home' },
        { label: 'New Product Development', icon: 'fa-solid fa-business-time fa-sm', route: '/home' },
        { label: 'Visitor Management', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Goods Tracker', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Reports', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'ESS', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
        { label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
    ];
}
