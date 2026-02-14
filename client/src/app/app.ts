import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [CommonModule, Nav, FormsModule, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}