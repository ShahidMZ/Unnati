import { computed, effect, Injectable, signal } from '@angular/core';

const STORAGE_KEY = "sidebar.expanded";
type AccordionState = Record<number, string>;

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    collapsed = signal(localStorage.getItem('sidebar-collapsed') === "true");

    // expandedIDs = computed(() => this.expandedSet());

    private media = window.matchMedia('(max-width: 1023px)');
    // private expandedSet = signal<Set<string>>(this.loadFromStorage());
    private accordion = signal<AccordionState>(this.load());

    constructor() {
        this.initResponsiveCollapse();

        // Persist collapse state
        effect(() => {
            localStorage.setItem('sidebar-collapsed', this.collapsed().toString());
        });
    }

    toggleSidebarCollapse() {
        this.collapsed.update(v => !v);
    }

    toggleMenu(level: number, id: string) {
        const current = { ...this.accordion() };

        if (current[level] === id) {
            delete current[level];
        } else {
            current[level] = id;
        }

        this.accordion.set(current);
        this.save(current);
    }

    // toggleExpanded(id: string) {
    //     const next = new Set(this.expandedSet());

    //     if (next.has(id)) {
    //         next.delete(id);
    //     } else {
    //         next.add(id);
    //     }

    //     this.expandedSet.set(next);
    //     this.saveToStorage(next);
    // }

    isExpanded(level: number, id: string): boolean {
        // return this.expandedSet().has(id);
        return this.accordion()[level] === id;
    }

    expandPath(path: string[]) {
        const next: AccordionState = {};

        path.forEach((id, level) => {
            next[level] = id;
        });

        this.accordion.set(next);
        this.save(next);
    }

    private load(): AccordionState {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    }

    private save(state: AccordionState) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    // private loadFromStorage(): Set<string> {
    //     try {
    //         const raw = localStorage.getItem(STORAGE_KEY);
            
    //         if (!raw) {
    //             return new Set<string>();
    //         }

    //         return new Set<string>(JSON.parse(raw));
    //     } catch {
    //         return new Set<string>();
    //     }
    // }

    // private saveToStorage(set: Set<string>) {
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
    // }
    
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
