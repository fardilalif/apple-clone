import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isMobile: boolean = false;
  sections = [
    {
      title: 'Shop and Learn',
      links: [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'AirPods',
        'TV & Home',
        'AirTag',
        'Accessories',
        'Gift Cards',
      ],
      open: false,
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Pay'],
      open: false,
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
      open: false,
    },
    {
      title: 'Entertainment',
      links: [
        'Apple One',
        'Apple TV+',
        'Apple Music',
        'Apple Arcade',
        'Apple Fitness+',
        'Apple Podcasts',
        'Apple Books',
        'App Store',
      ],
      open: false,
    },
    {
      title: 'Apple Store',
      links: [
        'Apple Store App',
        'Financing',
        'Apple Trade In',
        'Order Status',
        'Shopping Help',
      ],
      open: false,
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
      open: false,
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for University'],
      open: false,
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch'],
      open: false,
    },
    {
      title: 'Apple Values',
      links: [
        'Accessibility',
        'Education',
        'Environment',
        'Privacy',
        'Supply Chain',
      ],
      open: false,
    },
    {
      title: 'About Apple',
      links: [
        'Newsroom',
        'Apple Leadership',
        'Career Opportunities',
        'Investors',
        'Ethics & Compliance',
        'Events',
        'Contact Apple',
      ],
      open: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.updateView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateView();
  }

  updateView() {
    this.isMobile = window.innerWidth < 640;
    if (!this.isMobile) {
      this.sections.forEach((section) => (section.open = true));
    } else {
      this.sections.forEach((section) => (section.open = false));
    }
  }

  toggleSection(section: any) {
    if (this.isMobile) {
      section.open = !section.open;
    }
  }
}
