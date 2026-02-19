import { Component, inject, Input } from '@angular/core';
import { isActive, Router } from '@angular/router';
import { SidebarItem } from '../../core/models/layout/sidebar-item';

@Component({
  selector: 'app-sidebar-item',
  imports: [],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItemComponent {
    @Input() item!: SidebarItem;
    @Input() collapsed = false;
    @Input() level = 0;

    private router = inject(Router);

    protected readonly matchList = [ "NoMatches", "urlMatch", "childURLMatch" ];
    expanded = false;
    
    isActive() {
        if (this.item.route) {
            let isRouteActive = isActive(this.item.route, this.router, {
                paths: 'subset',
                queryParams: 'ignored',
                fragment: 'ignored',
                matrixParams: 'ignored'
            });

            if (isRouteActive() == true) {
                return this.matchList[1];
            }
        }

        if (this.item.children) {
            let isRouteActive = this.item.children.some(child => {
                if (child.route) {
                    isActive(child.route, this.router, {
                        paths: 'subset',
                        queryParams: 'ignored',
                        fragment: 'ignored',
                        matrixParams: 'ignored'
                    })()
                }
            });

            if (isRouteActive == true) {
                return this.matchList[2];
            }
        }

        return this.matchList[0];
    }

    toggleOrNavigate() {
        if (this.item.children) {
            this.expanded = !this.expanded;
        } else {
            this.router.navigate([this.item.route]);
        }
    }
}
