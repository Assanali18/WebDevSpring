import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  shareViaTelegram(product: any) {
    const url = encodeURIComponent(product.link);
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${product.name}`;
    window.open(telegramUrl, '_blank');
  }
}
