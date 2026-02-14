import { effect, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    collapsed = signal(localStorage.getItem('sidebar-collapsed') === "true");

    private media = window.matchMedia('(max-width: 1023px)');

    constructor() {
        this.initResponsiveCollapse();

        // Persist collapse state
        effect(() => {
            localStorage.setItem('sidebar-collapsed', this.collapsed().toString());
        });
    }

    toggleCollapse() {
        this.collapsed.update(v => !v);
    }
    
    private initResponsiveCollapse() {
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
            // Collapse automatically when entering small screen
            if (e.matches) {
                // Only collapse if currently expanded
                if (!this.collapsed()) {
                    this.collapsed.set(true);
                }
            }
        };

        // Initial check
        handleChange(this.media);
        this.media.addEventListener('change', handleChange);
    }
}
