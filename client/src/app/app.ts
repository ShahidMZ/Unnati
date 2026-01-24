import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Footer } from "../layout/footer/footer";

@Component({
    selector: 'app-root',
    imports: [CommonModule, Nav, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    private http = inject(HttpClient);
    protected readonly title = signal('Employee List');
    protected employees = signal<any>([]);

    constructor() {
        
    }

    ngOnInit(): void {
        this.http.get('https://localhost:5001/api/employeemaster/getemployees').subscribe({
            next: (response: any) => {
                this.employees.set(response);

                console.log(this.employees);
            },
            error:error => console.log(error),
            complete: () => console.log('Completed')
        });


    }
}