import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout-service';
import { PageHeader } from "../../components/page-header/page-header";

@Component({
    selector: 'app-dashboard',
    imports: [PageHeader],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard {

}
