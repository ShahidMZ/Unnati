export interface User {
    id: string;
    employeeID: string;
    isActive: boolean;
    displayName: string;
    email: string;
    lastLogin: Date;
    token: string;
    imageUrl?: string;
    coverPhoto?: string;
}