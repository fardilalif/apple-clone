import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private _http = inject(HttpClient);

  navLinks!: any[];
  isMenuOpen = false;

  ngOnInit(): void {
    this._http
      .get<[]>('assets/nav-links.json')
      .subscribe((data) => (this.navLinks = data));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
