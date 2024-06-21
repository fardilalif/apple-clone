import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  // total price state
  private totalPrice = signal(0);

  setPrice(price: number) {
    this.totalPrice.set(price);
  }

  getPrice() {
    return this.totalPrice();
  }
}
