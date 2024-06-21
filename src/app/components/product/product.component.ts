import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AppleBagIconComponent } from '../../icons/apple-bag-icon/apple-bag-icon.component';
import { BookmarkIconComponent } from '../../icons/bookmark-icon/bookmark-icon.component';
import { LorryIconComponent } from '../../icons/lorry-icon/lorry-icon.component';
import { PlusCircleComponent } from '../../icons/plus-circle/plus-circle.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    PlusCircleComponent,
    BookmarkIconComponent,
    LorryIconComponent,
    AppleBagIconComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private _router = inject(Router);

  selectedColor: string = 'space-grey';

  product = input<any>(null);

  navigateToDetail() {
    this._router.navigate(['detail']);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }
}
