import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BillboardComponent } from '../../components/billboard/billboard.component';
import { PricebarComponent } from '../../components/pricebar/pricebar.component';
import { BookmarkIconComponent } from '../../icons/bookmark-icon/bookmark-icon.component';
import { BoxIconComponent } from '../../icons/box-icon/box-icon.component';
import { BoxReturnIconComponent } from '../../icons/box-return-icon/box-return-icon.component';
import { PlusCircleComponent } from '../../icons/plus-circle/plus-circle.component';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PlusCircleComponent,
    PricebarComponent,
    BoxIconComponent,
    BoxReturnIconComponent,
    BillboardComponent,
    BookmarkIconComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  // service injection
  private _sharedService = inject(SharedServiceService);
  private _http = inject(HttpClient);

  chipPrices: { [key: string]: number } = {};
  ramPrices: { [key: number]: number } = {};
  storagePrices: { [key: number]: number } = {};

  selectedChip!: string;
  selectedRam!: number;
  selectedStorage!: number;
  totalPrice: number = 0;
  basePrice: number = 0;

  productDetail: any;

  ngOnInit(): void {
    this._http.get('assets/product-detail.json').subscribe((data: any) => {
      this.productDetail = data;

      this.basePrice = data.basePrice;
      this.totalPrice = this.basePrice;
      this.chipPrices = data.chipPrices;
      this.ramPrices = data.ramPrices;
      this.storagePrices = data.storagePrices;

      // assign first value
      this.selectedChip = data.chips[0].value;
      this.selectedRam = data.memories[0].size;
      this.selectedStorage = data.storages[0].size;

      this.totalPrice =
        this.basePrice +
        this.chipPrices[this.selectedChip] +
        this.ramPrices[this.selectedRam] +
        this.storagePrices[this.selectedStorage];

      this._sharedService.setPrice(this.totalPrice);
    });
  }

  selectChip(chip: string) {
    const currPrice =
      this.chipPrices[chip] - this.chipPrices[this.selectedChip];

    this.selectedChip = chip;
    this.totalPrice = this.totalPrice + currPrice;

    this._sharedService.setPrice(this.totalPrice);
  }

  selectRam(ram: number) {
    const currPrice = this.ramPrices[ram] - this.ramPrices[this.selectedRam];
    this.selectedRam = ram;
    this.totalPrice = this.totalPrice + currPrice;

    this._sharedService.setPrice(this.totalPrice);
  }

  selectStorage(storage: number) {
    const currPrice =
      this.storagePrices[storage] - this.storagePrices[this.selectedStorage];
    this.selectedStorage = storage;
    this.totalPrice = this.totalPrice + currPrice;

    this._sharedService.setPrice(this.totalPrice);
  }

  getChipPriceDiff(chip: string) {
    return this.chipPrices[chip] - this.chipPrices[this.selectedChip];
  }

  getRamPriceDiff(ram: number) {
    return this.ramPrices[ram] - this.ramPrices[this.selectedRam];
  }

  getStoragePriceDiff(storage: number) {
    return (
      this.storagePrices[storage] - this.storagePrices[this.selectedStorage]
    );
  }
}
