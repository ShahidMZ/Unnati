import { Component, computed, ElementRef, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AccountService } from '../../core/services/account-service';
import { Footer } from "../footer/footer";
import { SidebarItem } from '../../core/models/layout/sidebar-item';
import { SidebarItemComponent } from "../../components/sidebar-item/sidebar-item";
import { OverlayService } from '../../core/services/overlay-service';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, Footer, SidebarItemComponent],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css',
})
export class Sidebar {
    protected layout = inject(LayoutService);
    protected accountService = inject(AccountService);
    private overlayService = inject(OverlayService);

    widthClass = computed(() => this.layout.collapsed() ? 'w-15' : 'w-64');
    tooltipClasses = computed(() => this.layout.collapsed() ? 'flex tooltip tooltip-right w-full z-50' : 'flex w-full');

    menuItems: SidebarItem[] = [
        {
            sectionNumber: 1,
            index: 1,
            section: 'Home',
            label: 'Home',
            icon: 'fa-solid fa-tachograph-digital fa-sm',
            route: '/home/dashboard'
        } as SidebarItem,
        {
            sectionNumber: 1,
            index: 2,
            section: 'Home',
            label: 'Address Book',
            icon: 'fa-solid fa-address-book fa-sm',
            route: '/home/address-book'
        } as SidebarItem,
        {
            sectionNumber: 1,
            index: 3,
            section: 'Home',
            label: 'ESS',
            icon: 'fa-solid fa-list-check fa-sm',
            route: '/home/ess',
            children: [
                {
                    index: 1,
                    label: 'Apply Leave',
                    icon: 'fa-solid fa-plane-departure fa-sm',
                    route: '/home/ess/apply-leave'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'Holidays',
                    icon: 'fa-solid fa-calendar-days fa-sm',
                    route: '/home/ess/holidays'
                } as SidebarItem,
                {
                    index: 3,
                    label: 'My Approvals',
                    icon: 'fa-solid fa-check-to-slot fa-sm',
                    route: '/home/ess/my-approvals'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 3,
            section: 'Apps',
            label: 'User Management',
            icon: 'fa-solid fa-users fa-sm',
            route: '/home/user-management',
            children: [
                {
                    index: 1,
                    label: 'New Request',
                    icon: 'fa-solid fa-user-plus fa-sm',
                    route: '/home/user-management/new-request'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'Request Report',
                    icon: 'fa-solid fa-file-invoice fa-sm',
                    route: '/home/user-management/request-report'
                } as SidebarItem,
                {
                    index: 3,
                    label: 'User ID Report',
                    icon: 'fa-solid fa-id-card fa-sm',
                    route: '/home/user-management/user-id-report'
                } as SidebarItem,
                {
                    index: 4,
                    label: 'My Approvals',
                    icon: 'fa-solid fa-check-to-slot fa-sm',
                    route: '/home/user-management/my-approvals'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 4,
            section: 'Apps',
            label: 'SAP Management',
            icon: 'fa-brands fa-hubspot fa-sm',
            route: '/home/sap-management',
            children: [
                {
                    index: 1,
                    label: 'SAP Code Creation',
                    icon: 'fa-solid fa-code fa-sm',
                    route: '/home/sap-management/code-creation'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'SAP Code Modification',
                    icon: 'fa-solid fa-code-branch fa-sm',
                    route: '/home/sap-management/code-modification'
                } as SidebarItem,
                {
                    index: 3,
                    label: 'SAP Code Extension',
                    icon: 'fa-solid fa-code-pull-request fa-sm',
                    route: '/home/sap-management/code-extension'
                } as SidebarItem,
                {
                    index: 4,
                    label: 'Customer Creation',
                    icon: 'fa-solid fa-user-plus fa-sm',
                    route: '/home/sap-management/customer-creation'
                } as SidebarItem,
                {
                    index: 5,
                    label: 'Vendor Creation',
                    icon: 'fa-solid fa-truck-field fa-sm',
                    route: '/home/sap-management/vendor-creation'
                } as SidebarItem,
                {
                    index: 6,
                    label: 'Service Creation',
                    icon: 'fa-solid fa-concierge-bell fa-sm',
                    route: '/home/sap-management/service-creation'
                } as SidebarItem,
                {
                    index: 7,
                    label: 'My Approvals',
                    icon: 'fa-solid fa-check-to-slot fa-sm',
                    route: '/home/sap-management/my-approvals'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 5,
            section: 'Apps',
            label: 'Bookings',
            icon: 'fa-solid fa-bookmark fa-sm',
            route: '/home/bookings',
            children: [
                {
                    sectionNumber: 1,
                    index: 1,
                    section: 'Car Booking',
                    label: 'Car Booking',
                    icon: 'fa-solid fa-car fa-sm',
                    route: '/home/bookings/car-booking',
                    children: [
                        {
                            index: 1,
                            label: 'New Booking',
                            icon: 'fa-solid fa-plus fa-sm',
                            route: '/home/bookings/car-booking/new-booking'
                        } as SidebarItem,
                        {
                            index: 2,
                            label: 'Booking History',
                            icon: 'fa-solid fa-clock-rotate-left fa-sm',
                            route: '/home/bookings/car-booking/booking-history'
                        } as SidebarItem,
                        {
                            index: 3,
                            label: 'My Approvals',
                            icon: 'fa-solid fa-check-to-slot fa-sm',
                            route: '/home/bookings/car-booking/my-approvals'
                        } as SidebarItem
                    ]
                } as SidebarItem,
                {
                    sectionNumber: 1,
                    index: 2,
                    section: 'Meeting Room Booking',
                    label: 'Meeting Room Booking',
                    icon: 'fa-solid fa-handshake fa-sm',
                    route: '/home/bookings/meeting-room-booking',
                    children: [
                        {
                            index: 1,
                            label: 'New Booking',
                            icon: 'fa-solid fa-plus fa-sm',
                            route: '/home/bookings/meeting-room-booking/new-booking'
                        } as SidebarItem,
                        {
                            index: 2,
                            label: 'Booking History',
                            icon: 'fa-solid fa-clock-rotate-left fa-sm',
                            route: '/home/bookings/meeting-room-booking/booking-history'
                        } as SidebarItem,
                        {
                            index: 3,
                            label: 'My Approvals',
                            icon: 'fa-solid fa-check-to-slot fa-sm',
                            route: '/home/bookings/meeting-room-booking/my-approvals'
                        } as SidebarItem
                    ]
                } as SidebarItem,
                {
                    sectionNumber: 1,
                    index: 3,
                    section: 'Guest House Booking',
                    label: 'Guest House Booking',
                    icon: 'fa-solid fa-hotel fa-sm',
                    route: '/home/bookings/guest-house-booking',
                    children: [
                        {
                            index: 1,
                            label: 'New Booking',
                            icon: 'fa-solid fa-plus fa-sm',
                            route: '/home/bookings/guest-house-booking/new-booking'
                        } as SidebarItem,
                        {
                            index: 2,
                            label: 'Booking History',
                            icon: 'fa-solid fa-clock-rotate-left fa-sm',
                            route: '/home/bookings/guest-house-booking/booking-history'
                        } as SidebarItem,
                        {
                            index: 3,
                            label: 'My Approvals',
                            icon: 'fa-solid fa-check-to-slot fa-sm',
                            route: '/home/bookings/guest-house-booking/my-approvals'
                        } as SidebarItem
                    ]
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 6,
            section: 'Apps',
            label: 'HR Management',
            icon: 'fa-solid fa-person fa-sm',
            route: '/home/hr-management'
        } as SidebarItem,
        {
            sectionNumber: 2, 
            index: 7,
            section: 'Apps',
            label: 'Discrepancy Management',
            icon: 'fa-solid fa-bug fa-sm',
            route: '/home/discrepancy-management',
            children: [
                {
                    index: 1,
                    label: 'New Discrepancy',
                    icon: 'fa-solid fa-plus fa-sm',
                    route: '/home/discrepancy-management/new-discrepancy'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'Discrepancy Report',
                    icon: 'fa-solid fa-file-invoice fa-sm',
                    route: '/home/discrepancy-management/discrepancy-report'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 9,
            section: 'Apps',
            label: 'Ticketing System',
            icon: 'fa-solid fa-ticket fa-sm',
            route: '/home/ticketing-system',
            children: [
                {
                    index: 1,
                    label: 'New Ticket',
                    icon: 'fa-solid fa-plus fa-sm',
                    route: '/home/ticketing-system/new-ticket'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'My Tickets',
                    icon: 'fa-solid fa-ticket-simple fa-sm',
                    route: '/home/ticketing-system/my-tickets'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 8,
            section: 'Apps',
            label: 'New Product Development',
            icon: 'fa-solid fa-business-time fa-sm',
            route: '/home/new-product-development',
            children: [
                {
                    index: 1,
                    label: 'Project Dashboard',
                    icon: 'fa-solid fa-gauge-high fa-sm',
                    route: '/home/new-product-development/project-dashboard'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'Product Basket',
                    icon: 'fa-solid fa-basket-shopping fa-sm',
                    route: '/home/new-product-development/product-basket'
                } as SidebarItem,
                {
                    index: 3,
                    label: 'NPD',
                    icon: 'fa-solid fa-business-time fa-sm',
                    route: '/home/new-product-development/new-product-development'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 1,
            section: 'Apps',
            label: 'Visitor Management',
            icon: 'fa-solid fa-person-military-rifle fa-sm',
            route: '/home/visitor-management',
            children: [
                {
                    index: 1,
                    label: 'Dashboard',
                    icon: 'fa-solid fa-gauge-high fa-sm',
                    route: '/home/visitor-management/dashboard'
                } as SidebarItem,
                {
                    index: 2,
                    label: 'New Visitor',
                    icon: 'fa-solid fa-plus fa-sm',
                    route: '/home/visitor-management/new-visitor'
                } as SidebarItem,
                {
                    index: 3,
                    label: 'My Approvals',
                    icon: 'fa-solid fa-check-to-slot fa-sm',
                    route: '/home/visitor-management/my-approvals'
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 2,
            section: 'Apps',
            label: 'Goods Tracker',
            icon: 'fa-solid fa-truck fa-sm',
            route: '/home/goods-tracking',
            children: [
                {
                    index: 1,
                    label: 'Goods Inward',
                    icon: 'fa-solid fa-truck-arrow-right fa-sm',
                    route: '/home/goods-tracking/goods-inward',
                    children: [
                        {
                            index: 1,
                            label: 'With Purchase Order',
                            icon: 'fa-solid fa-file-invoice fa-sm',
                            route: '/home/goods-tracking/goods-inward/with-po'
                        } as SidebarItem,
                        {
                            index: 2,
                            label: 'Without Purchase Order',
                            icon: 'fa-solid fa-file-circle-plus fa-sm',
                            route: '/home/goods-tracking/goods-inward/without-po'
                        } as SidebarItem,
                        {
                            index: 3,
                            label: 'Stock Transfer',
                            icon: 'fa-solid fa-truck-moving fa-sm',
                            route: '/home/goods-tracking/goods-inward/stock-transfer'
                        } as SidebarItem,
                        {
                            index: 4,
                            label: 'Sub Contracting',
                            icon: 'fa-solid fa-handshake fa-sm',
                            route: '/home/goods-tracking/goods-inward/sub-contracting'
                        } as SidebarItem,
                        {
                            index: 5,
                            label: 'Returnable Materials',
                            icon: 'fa-solid fa-rotate-left fa-sm',
                            route: '/home/goods-tracking/goods-inward/returnable-materials'
                        } as SidebarItem,
                        {
                            index: 6,
                            label: 'Inward Register',
                            icon: 'fa-solid fa-book fa-sm',
                            route: '/home/goods-tracking/goods-inward/inward-register'
                        } as SidebarItem,
                    ]
                } as SidebarItem,
                {
                    index: 2,
                    label: 'Goods Outward',
                    icon: 'fa-solid fa-truck-arrow-right fa-flip-horizontal fa-sm',
                    route: '/home/goods-tracking/goods-outward',
                    children: [
                        {
                            index: 1,
                            label: 'Stock Transfer',
                            icon: 'fa-solid fa-truck-moving fa-sm',
                            route: '/home/goods-tracking/goods-outward/stock-transfer'
                        } as SidebarItem,
                        {
                            index: 2,
                            label: 'Sub Contracting',
                            icon: 'fa-solid fa-handshake fa-sm',
                            route: '/home/goods-tracking/goods-outward/sub-contracting'
                        } as SidebarItem,
                        {
                            index: 3,
                            label: 'Materials With Invoice',
                            icon: 'fa-solid fa-ellipsis fa-sm',
                            route: '/home/goods-tracking/goods-outward/other-materials'
                        } as SidebarItem,
                        {
                            index: 4,
                            label: 'Other Materials',
                            icon: 'fa-solid fa-ellipsis fa-sm',
                            route: '/home/goods-tracking/goods-outward/other-materials'
                        } as SidebarItem,
                        {
                            index: 5,
                            label: 'Outward Register',
                            icon: 'fa-solid fa-book fa-sm',
                            route: '/home/goods-tracking/goods-outward/outward-register'
                        } as SidebarItem,
                    ]
                } as SidebarItem
            ]
        } as SidebarItem,
        {
            sectionNumber: 2,
            index: 10,
            section: 'Apps',
            label: 'Reports',
            icon: 'fa-solid fa-chart-column fa-sm',
            route: '/home/reports'
        } as SidebarItem,
        {
            sectionNumber: 3,
            index: 1,
            section: 'Settings',
            label: 'Settings',
            icon: 'fa-solid fa-gear fa-sm',
            route: '/home/settings'
        } as SidebarItem
    ];

    constructor() {
        this.menuItems = this.menuItems.sort((a, b) => { 
            if (a.sectionNumber > b.sectionNumber) { return 1; } else if (a.sectionNumber < b.sectionNumber) { return -1; } else {
                if (a.index > b.index) { return 1; } else if (a.index < b.index) { return -1; } else { return 0; }
            }
        });
    }

    ngOnDestroy() {
        this.overlayService.close();
    }

    showOverlay(item: SidebarItem, data: ElementRef) {
        this.overlayService.close();

        if (this.layout.collapsed()) {
            this.overlayService.open(data, item);
        }
    }
}
