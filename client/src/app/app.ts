import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { Footer } from "../layout/footer/footer";
import { FormsModule } from '@angular/forms';
import { Login } from '../features/account/login/login';

@Component({
    selector: 'app-root',
    imports: [CommonModule, Nav, FormsModule, Login],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}