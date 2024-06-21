import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { AppleBagIconComponent } from '../../icons/apple-bag-icon/apple-bag-icon.component';
import { LorryIconComponent } from '../../icons/lorry-icon/lorry-icon.component';
import { PlusCircleComponent } from '../../icons/plus-circle/plus-circle.component';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-pricebar',
  standalone: true,
  imports: [
    CommonModule,
    PlusCircleComponent,
    LorryIconComponent,
    AppleBagIconComponent,
  ],
  templateUrl: './pricebar.component.html',
  styleUrl: './pricebar.component.css',
})
export class PricebarComponent {
  private _sharedService = inject(SharedServiceService);

  // hidden flag price bar mobile view
  hidden: boolean = true;

  // flag show option for mobile price bar
  showOptions: boolean = false;

  getTotalPrice() {
    return this._sharedService.getPrice();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
