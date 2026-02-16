import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';
import { NgIf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AccountService } from '../../core/services/account-service';
import { Footer } from "../footer/footer";

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, Footer],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {
    protected layout = inject(LayoutService);
    protected accountService = inject(AccountService);
    widthClass = computed(() => this.layout.collapsed() ? 'w-16' : 'w-64');
    tooltipClasses = computed(() => this.layout.collapsed() ? 'flex tooltip tooltip-right w-full z-50' : 'flex w-full');

    menuItems = [
        { sectionNumber: 1, section: 'Home', label: 'Home', icon: 'fa-solid fa-tachograph-digital fa-sm', route: '/home/dashboard' },
        { sectionNumber: 1, section: 'Home', label: 'Address Book', icon: 'fa-solid fa-address-book fa-sm', route: '/home' },
        { sectionNumber: 1, section: 'Home', label: 'ESS', icon: 'fa-solid fa-list-check fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'User Management', icon: 'fa-solid fa-users fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'SAP Management', icon: 'fa-brands fa-hubspot fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Bookings', icon: 'fa-solid fa-bookmark fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'HR Management', icon: 'fa-solid fa-person fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Discrepancy Management', icon: 'fa-solid fa-bug fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Ticketing System', icon: 'fa-solid fa-ticket fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'New Product Development', icon: 'fa-solid fa-business-time fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Visitor Management', icon: 'fa-solid fa-person-military-rifle fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Goods Tracker', icon: 'fa-solid fa-truck fa-sm', route: '/home' },
        { sectionNumber: 2, section: 'Apps', label: 'Reports', icon: 'fa-solid fa-chart-column fa-sm', route: '/home' },
        { sectionNumber: 3, section: 'Settings', label: 'Settings', icon: 'fa-solid fa-gear fa-sm', route: '/home' },
    ];

    constructor() {
        this.menuItems = this.menuItems.sort((a, b) => { 
            if (a.sectionNumber > b.sectionNumber) {
                return 1;
            } else if (a.sectionNumber < b.sectionNumber) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}
