import { Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { isActive, Router, RouterModule } from '@angular/router';
import { SidebarItem } from '../../core/models/layout/sidebar-item';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../core/services/layout-service';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItemComponent {
    @Input() item!: SidebarItem;
    @Input() collapsed = false;
    @Input() level = 0;
    @Output() dataEvent = new EventEmitter<ElementRef>();

    protected layoutService = inject(LayoutService);

    private router = inject(Router);
    private elementRef = inject(ElementRef);

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

    toggleExpand(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        this.layoutService.toggleMenu(this.level, this.item.id.toString());
    }

    isExpanded() {
        return this.layoutService.isExpanded(this.level, this.item.id.toString());
    }

    toggleOrNavigate() {
        if (this.item.children) {
            // this.expanded = !this.expanded;
            this.toggleExpand(new MouseEvent('click'));
        } else {
            this.toggleExpand(new MouseEvent('click'));
            this.router.navigate([this.item.route]);
        }
    }

    sendElementRef() {
        this.dataEvent.emit(this.elementRef);
    }
}
