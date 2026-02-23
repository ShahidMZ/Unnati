import { Component } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    imports: [PageHeader, RouterLink],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard {
    isMouseOverDashboardArea: boolean = false;

    showSettingsCog() {
        this.isMouseOverDashboardArea = true;
    }

    hideSettingsCog() {
        this.isMouseOverDashboardArea = false;
    }
}
