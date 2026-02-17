export interface SidebarItem {
    sectionNumber: number;
    index: number;
    section: string;
    label: string;
    icon?: string;
    route?: string;
    children?: SidebarItem[];
}