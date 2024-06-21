import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProductComponent } from '../../components/product/product.component';
import { ChatIconComponent } from '../../icons/chat-icon/chat-icon.component';

@Component({
  selector: 'app-product-selection',
  standalone: true,
  imports: [CommonModule, ProductComponent, ChatIconComponent],
  templateUrl: './product-selection.component.html',
  styleUrl: './product-selection.component.css',
})
export class ProductSelectionComponent implements OnInit {
  private _http = inject(HttpClient);

  // store list of products
  products: any = [];
  // store list of chips
  chips: any = [];
  // to set bg color of size bar panel when it is sticky
  isSticky: boolean = false;
  selectedSize: string = '14-inch';

  ngOnInit(): void {
    combineLatest([
      this._http.get('assets/products.json'),
      this._http.get('assets/chips-info.json'),
    ]).subscribe(([products, chips]) => {
      this.products = products;
      this.chips = chips;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const stickyElement = document.querySelector('.sticky');
    const rect = stickyElement?.getBoundingClientRect();
    this.isSticky = rect?.top === 0;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }
}
